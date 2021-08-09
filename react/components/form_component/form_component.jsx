import React, { Component } from "react";
import './form_component.css';
import axios from 'axios';
import { Jumbotron, Container } from 'react-bootstrap';
import $ from "jquery";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile:'',
      email:'',
      destination:'',
	  loading:false
    };

    this.name_handleChange = this.name_handleChange.bind(this);
    this.number_handleChange = this.number_handleChange.bind(this);
    this.mail_handleChange = this.mail_handleChange.bind(this);
    this.dest_handleChange = this.dest_handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount()
  {
   this.setState({destination:this.props.data.other_details[0].track_name})
  }

  name_handleChange(event) {
                                this.setState({
                                  name: event.target.value
                                });
                               }

   number_handleChange(event) {
                                this.setState({
                                  mobile: event.target.value
                                });
                               }

   mail_handleChange(event) {
                                this.setState({
                                  email: event.target.value
                                });
                               }

    dest_handleChange(event){
    
                                this.setState({
                                  destination: event.target.value
                                });
                               }

  handleSubmit(event) {



  let call_API=true

  for (let key in this.state)
    {
     if(this.state[key]=='')
     {
		 if(key=='loading')
		 {			 
			 
		 }
		 else
		 {			 
			 call_API=false		  
			 
		 }
     
     }
    }
	
	if(call_API==false)
	{
		
		alert('Please fill all the fields!')
		event.preventDefault();
	}
	else
	{
	let mobile= this.state.mobile
    let patt = new RegExp("^[0-9]*$");
    let res = patt.test(mobile);
    if(res==false)
    {
      call_API=false
      alert('Only digits allowed in Mobile number')
      event.preventDefault();
    }else if(mobile.length!=10)
    {
      call_API=false
      alert('Enter valid 10 digit mobile number')
      event.preventDefault();
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
								 this.setState({loading:true})
                                    
     axios({
                                method: 'post',
                                url: '/enquiry/',
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
                                    }, 4000);

				                        
										this.setState(
														{
														  name: '',
														  mobile:'',
														  email:'',
														  destination:'',
														  loading:false
														}
													)
										
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
     <form className='query_form' onSubmit={this.handleSubmit}>

      <h5 style={{margin:'0'}}>Get In Touch With US</h5>
      <div style={{marginTop:'20px'}}>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.name_handleChange} className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label for="mobile">Mobile Number</label>
            <input name="number" type="number" placeholder="Enter your number" value={this.state.mobile} onChange={this.number_handleChange} className="form-control" id="mobile" />
            <small style={{color:'#de8a8a'}}><b>** do not use prefix 0 OR +91 **</b></small>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" placeholder="Enter your email" value={this.state.email} onChange={this.mail_handleChange} className="form-control" id="email" />
          </div>

          <div className="form-group">
            <label for="trek" >Trek Name / Query</label>
            <input name="Track" type="text" placeholder="Write your query here" value={this.state.destination} onChange={this.dest_handleChange} className="form-control" id="trek" />
          </div>
		  </div>
		  <div id='success_message' className="alert alert-success" role="alert" style={{display: 'none',borderRadius:'15px'}}>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <div className="form_success_msg">
  <strong>Success!</strong>
  </div>
  <div className="form_success_msg">
  <p>Thank-You, We Will Get Back To You Shortly.</p>
  </div>
</div>

<div style={{display:this.state.loading?'block':'none'}}><Loading/></div>

          <div style={{textAlign:'center'}}>
          <input type="submit" value="Submit" className="callback_button" disabled={this.state.loading}/>
          </div>
	      
        </form>


    )
  }
}

function Loading() {
  return <div className="container_loading">
  <div className="bar1 bar"></div>
  <div className="bar2 bar"></div>
  <div className="bar3 bar"></div>
  <div className="bar4 bar"></div>
  <div className="bar5 bar"></div>
  <div className="bar6 bar"></div>
  <div className="bar7 bar"></div>
  <div className="bar8 bar"></div>
  <div className="bar9 bar"></div>
  <div className="bar10 bar"></div>

  <div className="progressContainer">
    <div className="progress"></div>
  </div>
</div>

}
export default ContactForm;