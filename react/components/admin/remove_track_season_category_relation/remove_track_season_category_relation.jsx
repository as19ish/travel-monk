import React, { Component } from "react";
import './remove_track_season_category_relation.css';
import axios from 'axios';
import { Form,Row,Col,Button,Dropdown,Container} from 'react-bootstrap';
import '../../green_button.css'
import $ from "jquery";

class Remove_relation extends React.Component {
  constructor(props) {
                        super(props);
                        this.state = {
                                      track_details:[],
                                      track_selected:[],
                                      category_list:[],
                                      season_list:[],
                                      season_selected:[],
                                      category_selected:[],
                                      loading:false,
                                      };
                                      this.select_track = this.select_track.bind(this);
                                      this.remove = this.remove.bind(this);
                     }

  componentDidMount()
  {
     this.setState({track_details:this.props.data})
  }
  componentDidUpdate()
 {
   
   let check=false
                if(this.state.track_details.length!=this.props.data.length)
                {
                  this.setState({track_details:this.props.data})
                }else{

                for(let i=0;i<this.props.data.length;i++)
                {
                  if(this.state.track_details[i]['track_name']!=this.props.data[i]['track_name'])
                  {
                    check=true
                  }
                }

                if(check==true)
                {
               
                     this.setState({track_details:this.props.data})

                }

                }
 }

 select_track(x)
 {
 
   axios.get('/get_category_season_using_track_id/',{params:{track_id:x[0]['id']}})
              .then(res => {
               
                this.setState({category_list:res.data.category_list,
                                season_list:res.data.season_list,
                                track_selected:x,
                                category_selected:[],
                                season_selected:[]})
              })
 }



remove(flag)
  {
  let api_call=true
  let type=''
  let data=[]
  if(flag=='season')
  {
     if(this.state.season_selected.length==0)
     {
       api_call=false
     }
     else
     {
       data=this.state.season_selected
       type='season'
     }
  }
  if(flag=='category')
  {
    if(this.state.category_selected.length==0)
     {
       api_call=false
     }
     else
     {
       data=this.state.category_selected
       type='category'
     }

  }

  if(api_call==false)
  {
        if(flag=='category')
        {
          alert('category required')
        }
        if(flag=='season')
        {
          alert('season required')
        }

        event.preventDefault();
  }
  else
  {

this.setState({loading:true})
  axios({
                                method: 'post',
                                url: '/remove_track_category_season_relation/',
                                data:{track_selected:this.state.track_selected,type:type,data:data}
                                })
                                .then(response=> {
                                   
                                                    this.setState({track_selected:[],
                                                                    season_selected:[],
                                                                    category_selected:[],
                                                                    category_list:[],
                                                                    season_list:[],
                                                                    loading:false})

				                        })

                                .catch(function (response) {
                                    //handle error
                                   
                                });
        event.preventDefault();


  }



   }
render() {
let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
 
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={() =>{this.select_track(selected)}}>{selected[0]['track_name']}</Dropdown.Item>)
  }

  let season_item=[]
  for (let x=0;x<this.state.season_list.length;x++)
  {
  let selected=[this.state.season_list[x]]
  
  season_item.push(<Dropdown.Item title={this.state.season_list[x][1]} eventKey={this.state.season_list[x][0]} onSelect={() =>{this.setState({season_selected:selected})}}>{this.state.season_list[x][1]}</Dropdown.Item>)
  }

  let category_item=[]
  for (let x=0;x<this.state.category_list.length;x++)
  {
  let selected=[this.state.category_list[x]]
  
  category_item.push(<Dropdown.Item title={this.state.category_list[x][1]} eventKey={this.state.category_list[x][0]} onSelect={() =>{this.setState({category_selected:selected})}}>{this.state.category_list[x][1]}</Dropdown.Item>)
  }

return (
<div>
<div style={{textAlign:'center'}}>
            <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Remove Season / Category</span>
             </div>
<Row>
                  <Col  style={{margin:'5px'}}>
                     <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                            <Dropdown.Menu >
                                              {item}
                                            </Dropdown.Menu>
                                          </Dropdown>
                  </Col>
                  <Col style={{textAlign:'center',margin:'5px'}}>
                                         <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px'}}>{this.state.season_selected.length!=0?this.state.season_selected[0][1]:'Select Season'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                            <Dropdown.Menu >
                                              {season_item}
                                            </Dropdown.Menu>
                                      </Dropdown>
                                 </Col>


                                 <Col style={{textAlign:'center',margin:'5px'}}>
                                         <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px'}}>{this.state.category_selected.length!=0?this.state.category_selected[0][1]:'Select Category'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                            <Dropdown.Menu >
                                              {category_item}
                                            </Dropdown.Menu>
                                      </Dropdown>
                                 </Col>
                                 <Col style={{textAlign:'center',margin:'5px'}}>

                                 </Col>
                                 <Col style={{textAlign:'center',margin:'5px'}}>
                                         <Button onClick={()=>{this.remove('season')}} className='myButton' disabled={this.state.loading}>Remove Season</Button>
                                 </Col>
                                 <Col style={{textAlign:'center',margin:'5px'}}>
                                         <Button onClick={()=>{this.remove('category')}} className='myButton' disabled={this.state.loading}>Remove Category</Button>
                                 </Col>
</Row>
</div>
    )
  }
}

export default Remove_relation


