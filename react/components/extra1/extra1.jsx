import React from "react";
import "./extra1.css";
import { Link} from 'react-router-dom'
import {Container, Row,Col} from 'react-bootstrap';

class Extra1 extends React.Component
{
render()
{
return(

<Container className='extra1_container' fluid>

  <Row>
    <Col style={{textAlign:'center'}}>
    <h2 style={{textAlign:'center',fontWeight:'bold'}}>Why Book Your Trek With Us?</h2>
    <h2 style={{textAlign:'center',fontWeight:'bold'}}><i className="fas fa-star" style={{color:'rgb(255, 204, 3)'}}></i>&nbsp;<i className="fas fa-star" style={{color:'rgb(255, 204, 3)'}}></i>&nbsp;<i className="fas fa-star" style={{color:'rgb(255, 204, 3)'}}></i>&nbsp;<i className="fas fa-star" style={{color:'rgb(255, 204, 3)'}}></i>&nbsp;<i className="fas fa-star" style={{color:'rgb(255, 204, 3)'}}></i>&nbsp;</h2>
    <br/>
    </Col>
    </Row>
    <Row className='padding_left_12'>
    <Col md='12' lg='6' sm='12' xs='12'>
    <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>Smaller Groups With Customized And Quality Services</span>.</h5>
    </Col>
     <Col md='12' lg='6' sm='12' xs='12'>
     <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>Stay In Better Tents/Hotels And HOME-STAYS</span>.</h5>
    </Col>
    <Col md='12' lg='6' sm='12' xs='12'>
         <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>We Organize Eco-Friendly And Responsible Treks</span>.</h5>
 </Col>
       <Col md='12' lg='6' sm='12' xs='12'>
       <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>Local Experienced And Certified Guide</span>.</h5>
   </Col>
        <Col md='12' lg='6' sm='12' xs='12'>
         <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>Transparent, Flexible And Customer Friendly Team</span>.</h5>
   </Col>
         <Col md='12' lg='6' sm='12' xs='12'>
         <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>No Compromise On Safety Standard</span>.</h5>
   </Col>

 <Col md='12' lg='6' sm='12' xs='12'>
      <h5 className='heading_light' style={{textAlign:'left'}}><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;<span>Upgraded And Quality Meals</span>.</h5>
   </Col>


    </Row>

  <Row style={{marginTop:'30px'}}>
    <Col style={{textAlign:'center'}}>
    <h5 style={{textAlign:'center',fontWeight:'650' }} className='heading_light'>Submit Your Trek Story With Us @ <Link to="/trekker_story_form" style={{color:'white'}}><span style={{textDecoration:'underline', color:'#007bff',cursor:'pointer'}}>My Trek Experience</span></Link> </h5>
    <h5 style={{textAlign:'center'}} className='heading_light'> Submit Your Article / Research About Any Trek With Pictures, Videos And GET 15% DISCOUNT On Trips/ Treks With Us. </h5>
    <h5 style={{textAlign:'center'}} className='heading_light'>Share At <a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:info@hike2heaven.com">info@hike2heaven.com </a> OR Whatsapp Number <a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></h5>
    </Col>
   </Row>
</Container>

)
}
}

export default Extra1;