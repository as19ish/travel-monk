import React, { Component } from "react";
import './Add_track_season_category.css';
import axios from 'axios';
import { Form,Row,Col,Button,Dropdown,Container} from 'react-bootstrap';
import '../../green_button.css'
import $ from "jquery";
import Remove_track_season_category_relation from '../remove_track_season_category_relation/remove_track_season_category_relation';

class Track_season extends React.Component {
  constructor(props) {
    super(props);
    this.state = {track_details:[],
                  track_selected:[],
                  season_details:[],
                  season_selected:[],
                  category_details:[],
                  category_selected:[]
                  };
                   this.handleSubmit = this.handleSubmit.bind(this);
                   this.select_track = this.select_track.bind(this);
                   this.select_category = this.select_category.bind(this);
                   this.select_season = this.select_season.bind(this);
                   this.refresh = this.refresh.bind(this);


 }

  componentDidMount()
  {
        axios.get('/get_track_season_cat_id_name/')
              .then(res => {
                
                this.setState({track_details:res.data.track,
                                season_details:res.data.season,
                                category_details:res.data.category})
              })
  }

   componentDidUpdate()
 {
     axios.get('/get_track_season_cat_id_name/')
              .then(res => {
           
                let track=(this.state.track_details.length!=res.data.track.length)
                let season=(this.state.season_details.length!=res.data.season.length)
                let category=(this.state.category_details.length!=res.data.category.length)
              
                //if trek.length||season.length||category.length are not same....
                let check=false
                if(track || season || category)
                {
                  this.setState({track_details:res.data.track,
                                 season_details:res.data.season,
                                 category_details:res.data.category
                                })
                }else{
                //if lengths are same but inside values are different....
                for(let i=0;i<res.data.track.length;i++)
                {
                  if(this.state.track_details[i]['track_name']!=res.data.track[i]['track_name'])
                  {
                    check=true
                  }
                }
                for(let j=0;j<res.data.season.length;j++)
                {
                  if(this.state.season_details[j]['name']!=res.data.season[j]['name'])
                  {
                    check=true
                  }
                }
                 for(let k=0;k<res.data.category.length;k++)
                {
                  if(this.state.category_details[k]['name']!=res.data.category[k]['name'])
                  {
                    check=true
                  }
                }

                if(check==true)
                {
           
                     this.setState({track_details:res.data.track,
                                 season_details:res.data.season,
                                 category_details:res.data.category
                                })

                }


                }


              })

 }

  refresh()
  {

 
        axios.get('/get_track_season_cat_id_name/')
              .then(res => {
                
                this.setState({track_details:res.data.track,
                                season_details:res.data.season,
                                category_details:res.data.category,
                                track_selected:[],
                                season_selected:[],
                                category_selected:[]})
              })

  }

select_track(x)
     {
     
     this.setState({track_selected:[x]})
     }
select_season(x)
     {
     
     this.setState({season_selected:[x]})
     }
select_category(x)
    {
     
     this.setState({category_selected:[x]})
     }
handleSubmit(event)
  {
        
        if(this.state.track_selected.length==0 || this.state.season_selected.length==0 || this.state.category_selected.length==0)
        {
          alert('All Fields (TREK/ SEASON/ CATEGORY) Are Required')
          event.preventDefault();
        }
        else
        {
          const data={track_id:this.state.track_selected[0]['id'],
                      season_id:this.state.season_selected[0]['id'],
                      category_id:this.state.category_selected[0]['id']}
            axios({
                                method: 'post',
                                url: '/update_track_season_cat_relation/',
                                data:data
                                })
                                .then(response=> {
                                    
                                    document.getElementById('success_message12').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert12").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert12").fadeTo(500, 1)
                                                                     document.getElementById('success_message12').style.display='none';

                                        });
                                    }, 2000);
                                                    this.setState({track_selected:[],season_selected:[],category_selected:[]})

				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
        event.preventDefault();
        }
  }
render() {
   
    let trek_item=[]
      for (let x=0;x<this.state.track_details.length;x++)
      {
      let selected=this.state.track_details[x]
      
      trek_item.push(<Dropdown.Item eventKey={selected['id']} style={{textTransform:'uppercase'}} onSelect={() =>{this.select_track(selected)}}>{selected['track_name']}</Dropdown.Item>)
      }
      let season_item=[]
      for (let x=0;x<this.state.season_details.length;x++)
      {
      let selected=this.state.season_details[x]
      
      season_item.push(<Dropdown.Item eventKey={selected['id']} style={{textTransform:'uppercase'}} onSelect={() =>{this.select_season(selected)}}>{selected['name']}</Dropdown.Item>)
        }
      let category_item=[]
      for (let x=0;x<this.state.category_details.length;x++)
      {
      let selected=this.state.category_details[x]
      
      category_item.push(<Dropdown.Item eventKey={selected['id']} style={{textTransform:'uppercase'}} onSelect={() =>{this.select_category(selected)}}>{selected['name']}</Dropdown.Item>)
      }
return (
<div>
                  <Row>
                  <Col style={{margin:'5px'}}>
                     <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                            <Dropdown.Menu >
                                              {trek_item}
                                            </Dropdown.Menu>
                                          </Dropdown>
                  </Col>
                   <Col style={{margin:'5px'}}>
                     <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.season_selected.length!=0?this.state.season_selected[0]['name']:'Select Season'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                                            <Dropdown.Menu >
                                              {season_item}
                                            </Dropdown.Menu>
                                          </Dropdown>
                  </Col>
                   <Col style={{margin:'5px'}}>
                     <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.category_selected.length!=0?this.state.category_selected[0]['name']:'Select Category'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                                            <Dropdown.Menu >
                                              {category_item}
                                            </Dropdown.Menu>
                                          </Dropdown>
                  </Col>
                     <Col style={{margin:'5px'}}>
                             <Form onSubmit={this.handleSubmit}>
                                <Button type="submit" className='myButton'>Click To Add</Button>
                                 <Button onClick={this.refresh} className='myButton'>reset</Button>
                              </Form>

                      </Col>
                  </Row>
				  
				  <Remove_track_season_category_relation data={this.state.track_details}/>
</div>

    )
  }
}

export default Track_season


