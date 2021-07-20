import React, { Component } from "react";
import './season.css';
import axios from 'axios';
import { Jumbotron, Container,Table,thead,tr,th,td,Button} from 'react-bootstrap';
import $ from "jquery";
import '../../green_button.css'

class Season_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[],
                  id_selected:'',
                  name_selected:'',
                  description_selected:''};
    this.handleEdit=this.handleEdit.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleChange=this.handleChange.bind(this);
 }
 componentDidMount()
 {
    
   this.setState({data:this.props.data})
 }
 componentDidUpdate()
 {
   
   if(this.props.data.length!=this.state.data.length)
   {
     this.setState({data:this.props.data})
   }

 }

 handleEdit(event,id,name,description)
 {
 
 this.setState({id_selected:id,
                 name_selected:name,
                 description_selected:description
               })
 }
 handleChange(event,id)
 {
 
 let temp=this.state.data
 let name=''
 for(let x of temp)
 {
   if (x['id']==id)
   {
    x['name']=event.target.value
    name=event.target.value
   }
 }
 
 this.setState({data:temp,
                name_selected:name})
 }

  handleChangeDesc(event,id)
 {
 
 let temp=this.state.data
 let desc=''
 for(let x of temp)
 {
   if (x['id']==id)
   {
    x['description']=event.target.value
    desc=event.target.value
   }
 }
 
 this.setState({data:temp,
                description_selected:desc})
 }

 handleUpdate()
 {
 
 let id=this.state.id_selected
 let name=this.state.name_selected
 let desc=this.state.description_selected

 axios({
                                method: 'post',
                                url: '/update_season/',
                                data:{id:id,name:name,description:desc}
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message13').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert13").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert13").fadeTo(500, 1)
                                                                     document.getElementById('success_message13').style.display='none';

                                        });
                                    }, 4000);
                                           axios({method: 'get',url: '/get_season/'}).then(response=> {
                                                            //handle success

                                                            
                                                            this.setState({
                                                                         data:response.data.result,
                                                                         id_selected:'',
                                                                         name_selected:'',
                                                                         description_selected:''
                                                                        })

                                                         }).catch(function (response) {
                                                            //handle error
                                                            
                                                        });
                                 				      })

                                .catch(function (response) {
                                    //handle error
                                    
                                });

 }

  render() {
  
  
  
  let row=[]
  let i=1
  if(this.state.data.length!=0)
  {
     for(let x of this.state.data)
          {
          
            row.push(<tr style={{textTransform:'uppercase'}}>
                      <td>{i++}</td>
                      <td><input name='name_selected'  type='text' value={x['name']} onChange={(e)=>this.handleChange(e,x['id'])} disabled={x['id']!=this.state.id_selected}/></td>
                      <td><textarea name="description_selected" onChange={(e)=>this.handleChangeDesc(e,x['id'])} disabled={x['id']!=this.state.id_selected}>{x['description']}</textarea></td>
                      <td><Button type="button" className='myButton' onClick={(e)=>this.handleEdit(e,x['id'],x['name'],x['description'])} disabled={false}>EDIT</Button></td>
                      <td><Button type="button" className='myButton' onClick={()=>this.handleUpdate()} disabled={x['id']!=this.state.id_selected}>UPDATE</Button></td>
                    </tr>)
          }
   }
    return (
    <div>
    <div id='success_message13' className="alert13 alert-success13" role="alert" style={{display: 'none',borderRadius:'15px'}}>
   <div className="form_success_msg13">
  <strong>Success!</strong>
  </div>
</div>
<Table responsive style={{borderBottom:'5px solid #FFCC03',padding:'5%', backgroundColor:'#ebebeb'}}>
  <thead>
    <tr>
      <th>S.N.</th>
      <th>SEASON</th>
      <th>DESCRIPTION</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {row}
  </tbody>
</Table>
</div>
    )
  }
}
//main class.................................................................................
class SeasonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description:'',
      result:[]
    };

    this.name_handleChange = this.name_handleChange.bind(this);
    this.description_handleChange = this.description_handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount()
  {

  axios({method: 'get',url: '/get_season/'}).then(response=> {
                                    //handle success

                                    
                                    this.setState({
                                      name: '',
                                      description:'',
                                      result:response.data.result
                                                })

                                 }).catch(function (response) {
                                    //handle error
                                    
                                });
}

 componentDidUpdate()
 {
   
   let api_data=[]
   axios({method: 'get',url: '/get_season/'}).then(response=> {
                                    //handle success

                                    
                                   api_data=response.data.result

                                    
                                    
                                    
                                   if(this.state.result.length!=api_data.length)
                                       {
                                       
                                        this.setState({
                                              name: '',
                                              description:'',
                                              result:api_data
                                                     })
                                        }


                                 }).catch(function (response) {
                                    //handle error
                                    
                                });

 }
  name_handleChange(event) {
                                this.setState({
                                  name: event.target.value
                                });
                               }

   description_handleChange(event) {
                                this.setState({
                                  description: event.target.value
                                });
                               }

  handleSubmit(event) {



  let call_API=true

  for (let key in this.state)
    {
    if(key!='result')
    {
         if(this.state[key]=='')
             {
             call_API=false
              let a=key +' Required'
                 alert(a)
                 event.preventDefault();
             }
    }

    }

if(call_API==true)
{

let data={}
               let response_data={}
                                 for (let key in this.state)
                                 {
                                     data[key]=this.state[key]

                                 }
                                 
                                 data=JSON.stringify(data)
                                    
     axios({
                                method: 'post',
                                url: '/add_season/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert").fadeTo(500, 1)
                                                                     document.getElementById('success_message').style.display='none';

                                        });
                                    }, 2000);


                                    this.setState({
                                      name: '',
                                      description:'',
                                      result:response.data.result
                                                })

                                 })

                                .catch(function (response) {
                                    //handle error
                                    
                                });


//$(".query_form")[0].reset();

    event.preventDefault();
}
  }

  render() {
  

    return (

    <div>
     <form className='query_form' onSubmit={this.handleSubmit} style={{borderBottom:'5px solid #FFCC03',padding:'5%', backgroundColor:'#ebebeb'}}>

<div id='success_message' className="alert alert-success" role="alert" style={{display: 'none',borderRadius:'15px'}}>
   <div className="form_success_msg">
  <strong>Success!</strong>
  </div>
</div>

     <fieldset>
        <legend style={{textTransform:'uppercase'}}>Season Form</legend>
          <div className="form-group">
            <input type="text" name="name" style={{backgroundColor:'white'}} value={this.state.name} onChange={this.name_handleChange} className="form-control1" placeholder="Season" />
          </div>

          <div className="form-group">
            <textarea name="description" type="number" style={{backgroundColor:'white'}} onChange={this.description_handleChange} className="form-control1" rows="5" cols="20" placeholder="Description">{this.state.description}</textarea>
          </div>
          <div style={{textAlign:'center'}}>
          <input type="submit" value="Submit" className="callback_button" />
          </div>
       </fieldset>
        </form>

<Season_table data={this.state.result}/>

</div>
    )
  }
}
export default SeasonForm;