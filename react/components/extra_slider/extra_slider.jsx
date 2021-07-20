import React from "react";
import "./extra_slider.css";
import $ from 'jquery';
import axios from 'axios';
import { Link} from 'react-router-dom'
import {Container, Row,Col,Image } from 'react-bootstrap';

class Slider extends React.Component
{
render()
{
return(

<Container style={{paddingTop:'50px',paddingBottom:'50px',background:'linear-gradient(to right, #ffcc03 0%,#fedd4a 66%,#fee35b 75%,#fdee79 100%)'}} fluid>
  <Row>
    <Col style={{textAlign:'center'}}>
    <h1 style={{textAlign:'center',fontWeight:'bold'}}>Know Who We Are</h1>
    <br/>
    <h4 style={{textAlign:'center',fontWeight:'700'}}>We <span style={{color:'rgb(69, 141, 0)'}}>Hike2Heaven</span> Are A Brand Name In Tourism Specially In The Hills Of <span style={{color:'rgb(69, 141, 0)'}}>Uttarakhand</span>.</h4>
    <br/>
    <h5 style={{textAlign:'center',fontWeight:'500'}}>Thrilling Trekking History With Our Trekkers. (1000+ Treks Covered) Over Past Years.</h5>

    </Col>
    </Row>

    <Row className='mar-top'>
	
	 <Col style={{textAlign:'center'}} md={3} lg={3}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/peak.jpeg" roundedCircle thumbnail />
    <br/>
     <br/>
     <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'700'}}>Peak Climbing</p>
    
    </Col>

    <Col style={{textAlign:'center'}} md={3} lg={3}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/greenery.jpeg" roundedCircle thumbnail />
     <br/>
     <br/>
     <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'700'}}>Greenery</p>
     
    </Col>
	
	<Col style={{textAlign:'center'}} md={3} lg={3}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/snow.jpeg" roundedCircle thumbnail />
    <br/>
     <br/>
     <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'700'}}>Snow Camping</p>
     
    </Col>

    <Col style={{textAlign:'center'}} md={3} lg={3}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/beautiful.jpeg" roundedCircle thumbnail />
     <br/>
     <br/> 
     <p style={{textAlign:'center', fontSize:'1.2rem',fontWeight:'700'}}>Beautiful Trek</p>
     
    </Col>


  </Row>

  <Row className='mar-top'>
    <Col style={{textAlign:'center'}}>
    <h6 style={{textAlign:'center',fontWeight:'700'}}>“The best view comes after the hardest climb.”</h6>
    </Col>
   </Row>
</Container>

)
}
}

export default Slider;