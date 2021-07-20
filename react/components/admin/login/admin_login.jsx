import React, { Component } from "react";
import './admin_login.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class Admin_Login_Component extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.state={redirect: false}

  }

handleChange(event) {
        this.setState({[event.target.id]:event.target.value})

}

handleSubmit(event) {
                            event.preventDefault();
                            const data = new FormData();
                             for (let [key, value] of Object.entries(this.state)) {
                                                                                     data.append(key,value)
                                                                                   }
let flag=false

    axios({
    method: 'post',
    url: '/admin_verification/',
    data: data,
    })
    .then(response =>{
        //handle success
        
        if(response.data.result=='Failed')
        {
              alert('Wrong ID/Password')
        }
        else
        {
            flag=true
            
            this.setState({
                              redirect: flag
                            })
        }
    }


    )
    .catch(function (response) {
        //handle error
        

    });

  }
   renderRedirect(){
    if (this.state.redirect) {
      return <Redirect to='/Admin_Home_Component' />
    }
  }


  render() {
    return (

<div className="login-page">
{this.renderRedirect()}
        <div className="form1">
          <form className="login-form" onSubmit={this.handleSubmit} method="post">

            <input type="text" id="admin_name" placeholder="username" onChange={this.handleChange} />
            <input type="password" id="admin_password" placeholder="password" onChange={this.handleChange} />
            <button type="submit">login</button>
          </form>
        </div>
      </div>
      )
      }
}
      export default Admin_Login_Component