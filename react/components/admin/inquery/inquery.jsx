import React, { Component } from "react";
import './inquery.css'
import axios from 'axios'
import {Container,Row,Col,Button,Table,thead,tr,td,Badge} from 'react-bootstrap';
import $ from 'jquery'
class Inquery extends React.Component {
  constructor() {
        super();
        this.state={inquery:[]}
        this.handleClick=this.handleClick.bind(this);
        this.refresh=this.refresh.bind(this);
  }

refresh()
{
 
        axios.get('http://localhost:8000/get_inquery/')
              .then(res => {
                
                this.setState({inquery:res.data.result})
              })

}
  handleClick(id)
  {

  
  let data={'id':id}
  axios({
                                method: 'post',
                                url: 'http://localhost:8000/clear_inquiry/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success
                                    

                                    axios.get('http://localhost:8000/get_inquery/').then(res => {
                                                                
                                                                this.setState({inquery:res.data.result})
                                                              })

                                        }).catch(function (response) {
                                    //handle error
                                    
                                });
}

  componentDidMount()
  {
    
        axios.get('http://localhost:8000/get_inquery/')
              .then(res => {
                
                this.setState({inquery:res.data.result})
              })
  }
  render()
  {
  let inquery_rows=[]
  for(let i=0;i<this.state.inquery.length;i++)
  {
    let now=this.state.inquery[i]['date'].split("T");
    inquery_rows.push(<tr><td>{i+1}</td>
    <td>{this.state.inquery[i]['name']}</td>
    <td>{this.state.inquery[i]['mobile']}</td>
    <td>{this.state.inquery[i]['email']}</td>
    <td>{this.state.inquery[i]['destination']}</td>
    <td>{now[0]}</td>
    <td>{now[1]}</td>
    <td><Button onClick={()=>this.handleClick(this.state.inquery[i]['id'])}>Clear</Button></td></tr>)
  }
  return (
 
  <Container className='admin_div' style={{padding:'2rem',minHeight:'200px',marginBottom:'2rem',textAlign:'center'}}>
  <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Enquiries <Badge variant="light">{this.state.inquery.length}</Badge></span>
<Button onClick={()=>this.refresh()}>Refresh</Button>
  <Table responsive style={{background:'#F8F8F8'}}>
  <thead>
    <tr>
      <th>S.n.</th>
      <th>Name</th>
      <th>Mobile</th> 
      <th>Email</th>
      <th>Destination</th>
      <th>Date</th>
      <th>Time</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {inquery_rows}
  </tbody>
</Table>

  </Container>

  )

  }

}

export default Inquery;