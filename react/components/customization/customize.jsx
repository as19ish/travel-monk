import React, { Component } from "react";
import axios from 'axios';
import './customize.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class Customize extends React.Component {
render() {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = '9IH1DckaFFY';
let height = '390';
let width = '100%';
    return (

<div>
<div className='div_static_back_customize'>
</div>
<h2 className="all_blogs_heading" style={{marginTop:'10px',marginBottom:'0.5rem'}}>Customize Your Trip with <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col sm={12} md={12} lg={12} className='pad_cen'>
    <Youtube_player videoId={videoId} height={height} width={width}/>
</Col>
  </Row>
</Container>
 
<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
    <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px'}}> 
	Customizing the trek is a very good option for families, students, corporate groups, and friends.
Choose your Trek ,Activity,requirements and Contact Us


At Hike2Heaven we understand that your vacation is very special to you. 
We put into ground all of our expertise from the field, unsurpassed knowledge of the sport, relentless physical effort, 
top quality equipment and efficient planning to make your travel a memory for lifetime. With us, we bring along the services of lot of experts, 
best of the locals and local service providers to make your dream vacation come alive and fruitful. 
Our efforts are to make your endeavours come true without any compromises to YOUR objectives. 
We do not want to build up constraints. Here its - <b>YOUR service, YOUR way</b>.
<br/><br/>
	
      You can cusotimze your treks as per your choice. For more details please contact us.<br/>
	<span>Contact At <a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:mountainsrover@gmail.com">mountainsrover@gmail.com </a> OR Call / Whatsapp Number <a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></span>

	</p>
	
	</Col>
  </Row>
</Container>
	
<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/customize/cust1.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/customize/cust2.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/customize/cust4.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/customize/cust5.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/customize/cust6.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/customize/cust7.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/customize/cust8.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/customize/cust9.jpg"/>
    </Col>
    </Row>
</Container>
</div>
    )


}
}



export default Customize;