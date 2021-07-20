import React, { Component } from "react";
import './track_details.css';
import axios from 'axios';
import { Form,Col,Button,DropdownButton,Dropdown,Container} from 'react-bootstrap';
import $ from "jquery";
import '../../green_button.css'

class Update_track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form_data:{},track_details:[],track_selected:[]};
                   this.handleChange = this.handleChange.bind(this);
                   this.handleSubmit = this.handleSubmit.bind(this);
                   this.select_track = this.select_track.bind(this);

 }

  componentDidMount()
  {
    
        axios.get('/get_track_id_name/')
              .then(res => {
                
                this.setState({track_details:res.data.result})
              })
  }
   componentDidUpdate()
 {
   
     axios.get('/get_track_id_name/')
              .then(res => {
                
                
                
                
                if(this.state.track_details.length!=res.data.result.length)
                {
                  this.setState({track_details:res.data.result,
                                 form_data:{},
                                 track_selected:[]})
                }

              })

 }

  select_track(x)
 {
 

   axios.get('/get_track_info/',{params:{track_id:x['id']}})
              .then(res => {
                
                this.setState({form_data:res.data.result,track_selected:[x]})
              })
 }
 handleChange(event,field)
 {
    
    
    let form_data=this.state.form_data
    form_data[field]=event.target.value
    this.setState({form_data:form_data})
 }

  handleSubmit(event)
  {
  
const data={track_info:this.state.form_data}
            axios({
                                method: 'post',
                                url: '/update_track/',
                                data:data
                                })
                                .then(response=> {
                                    
                                    document.getElementById('success_message10').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert10").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert10").fadeTo(500, 1)
                                                                     document.getElementById('success_message10').style.display='none';

                                        });
                                    }, 2000);

                                      axios.get('/get_track_id_name/')
                                      .then(res => {
                                                    
                                                    this.setState({track_details:res.data.result,form_data:{},track_selected:[]})
                                                  })
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });


event.preventDefault();

  }

render() {
   
   let form_col=[]
   let item=[]
      for (let x=0;x<this.state.track_details.length;x++)
      {
      let selected=this.state.track_details[x]
      
      item.push(<Dropdown.Item eventKey={selected['id']} onSelect={() =>{this.select_track(selected)}}>{selected['track_name']}</Dropdown.Item>)
      }

   let form_row=[]
   if(Object.keys(this.state.form_data).length>0)
   {
        for(let x=0;x<Object.keys(this.state.form_data).length;x++)
           {
             if(x==3 || x==6 || x==9 || x==12 || x==13)
             {
               form_row.push(<Form.Row style={{marginTop:'2rem'}}>{form_col}</Form.Row>)
               form_col=[]
             }
                form_col.push(<Col><Form.Label style={{textTransform:'uppercase',fontWeight:'bold'}}>{Object.keys(this.state.form_data)[x]}</Form.Label><Form.Control as={Object.keys(this.state.form_data)[x]=='track_description' || Object.keys(this.state.form_data)[x]=='track_cost_cusomization'?'textarea':'input'} value={Object.values(this.state.form_data)[x]} placeholder={Object.keys(this.state.form_data)[x]} onChange={(event)=>this.handleChange(event,Object.keys(this.state.form_data)[x])} disabled={Object.keys(this.state.form_data)[x]=='id' || Object.keys(this.state.form_data)[x]=='date'?true:false}/></Col>)
           }
           form_row.push(<Form.Row style={{marginTop:'2rem'}}>{form_col}</Form.Row>)

   }

return (
<div>
<Container className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
<div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Update Trek</span>
 </div>
<div style={{textAlign:'center',marginTop:'50px'}}>
                                      <Dropdown as={'Primary'}>
                                        <Button variant="info" style={{width:'200px'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                        <Dropdown.Menu >
                                          {item}
                                        </Dropdown.Menu>
                                      </Dropdown>

</div>
<Form id='details_form' onSubmit={this.handleSubmit}>
<div id='success_message10' className="alert10 alert-success10" style={{display: 'none',borderRadius:'15px'}}>
  <div className="form_success_msg10">
  <strong>Success!</strong>
  </div>
</div>
{form_row}
<Button type="submit" disabled={this.state.track_selected.length==0?true:false} className='myButton' style={{marginTop:'2rem'}}>Click To Update</Button>
</Form>
</Container>
</div>

    )
  }
}



//main component..............................
class Track_details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form_data:{'TREK NAME':'',
                               'TREK DAYS':'',
                               'TREK LENGTH':'',
                               'TREK ALTITUDE':'',
                               'TREK DIFFICULTY':'',
                               'BEST SEASON':'',
                               'START POINT':'',
                               'END POINT':'',
                               'NEARBY RAILWAY':'',
                               'NEARBY AIRPORT':'',
                               'ROAD ROUT':'',
                               'TREK COST':'',
                               'TREK DESCRIPTION':'',
							   'TREK COST CUSTOMIZATION':''
                              }
                  };
                   this.handleChange = this.handleChange.bind(this);
                   this.handleSubmit = this.handleSubmit.bind(this);

 }
 handleChange(event,field)
 {
    
    
    let form_data=this.state.form_data
    form_data[field]=event.target.value
    this.setState({form_data:form_data})
 }

  handleSubmit(event) {

  let call_API=true
   for (let key in this.state.form_data)
    {
     if(this.state.form_data[key]=='')
     {
     call_API=false
      let a='fill'+ key +' again'
         alert(a)
         event.preventDefault();
     }
    }

if(call_API==true)
{

let data={}
               let response_data={}
                                 for (let key in this.state.form_data)
                                 {
                                     data[key]=this.state.form_data[key]

                                 }
                                 
                                 data=JSON.stringify(data)
                                    
     axios({
                                method: 'post',
                                url: '/submit_trek_info/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message3').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert3").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert3").fadeTo(500, 1)
                                                                     document.getElementById('success_message3').style.display='none';

                                        });
                                    }, 4000);


document.getElementById("details_form").reset();
                                    this.setState({
                                      form_data:{'TREK NAME':'',
                                                   'TREK DAYS':'',
                                                   'TREK LENGTH':'',
                                                   'TREK ALTITUDE':'',
                                                   'TREK DIFFICULTY':'',
                                                   'BEST SEASON':'',
                                                   'START POINT':'',
                                                   'END POINT':'',
                                                   'NEARBY RAILWAY':'',
                                                   'NEARBY AIRPORT':'',
                                                   'ROAD ROUT':'',
                                                   'TREK COST':'',
                                                   'TREK DESCRIPTION':'',
												   'TREK COST CUSTOMIZATION':''
                              } 
                                                   })



				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
    event.preventDefault();

}

}




render() {
   
   let form_col=[]
   let form_row=[]
   for(let x=0;x<Object.keys(this.state.form_data).length;x++)
   {
     if(x==3 || x==6 || x==9 || x==12 || x==13)
     {
       form_row.push(<Form.Row style={{marginTop:'2rem'}}>{form_col}</Form.Row>)
       form_col=[]
     }
        form_col.push(<Col><Form.Control as={x==12 || x==13?'textarea':'input'} value={this.state.form_data[x]} placeholder={Object.keys(this.state.form_data)[x]} onChange={(event)=>this.handleChange(event,Object.keys(this.state.form_data)[x])} required/></Col>)
   }
   form_row.push(<Form.Row style={{marginTop:'2rem'}}>{form_col}</Form.Row>)

return (

<div>
<Container className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
<div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>add trek</span>
 </div>
<Form id='details_form' onSubmit={this.handleSubmit}>
<div id='success_message3' className="alert3 alert-success3" style={{display: 'none',borderRadius:'15px'}}>
  <div className="form_success_msg">
  <strong>Success!</strong>
  </div>
</div>
{form_row}
<Button type="submit" className='myButton' style={{marginTop:'2rem'}}>Click To Add</Button>
</Form>
<hr/>
</Container>
<Update_track/>
</div>
    )
  }
}

export default Track_details;