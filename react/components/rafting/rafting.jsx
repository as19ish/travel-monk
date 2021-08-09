import React, { Component } from "react";
import axios from 'axios';
import './rafting.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class Rafting extends React.Component {
render() {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = 'ZG8TBtKiz1w';
let height = '390';
let width = '100%';
    return (

<div>
<div className='div_static_back_raft'>
</div>
<h2 className="all_blogs_heading" style={{marginTop:'30px',marginBottom:'30px'}}>Rafting with <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
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

            Rafting is a competitive sport in which the objective is to navigate downstream on river rapids using an inflated raft.
            It is considered as an extreme sport which is highly challenging and risky, and requires a great deal of teamwork.

        River rafting in India has emerged as one of the most popular sports.
        Steering through the unbridled water and passing through parlous rapids, it is something only an adventurer at heart can realize and appreciate.
         If you haven’t yet been able to get a chance to experience this utterly thrilling water sport,
         then pack your bags and be ready to become adventurer this summer.


        Our travel guides and equipment suppliers have designed these keep your budget and interest factors in packages in mind.
    </p>
<br/>

<p style={{fontSize:'1rem', fontWeight:'700',lineHeight: '30px'}}>
Rafting packages in Rishikesh starting from Rs 600/person and goes up to Rs 2800/person
depending upon the distance of rafting trip, rapid grade, season and number of person.<br/>
</p>

<div className="row">
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign:'center',fontWeight:'bolder',  fontSize: '20px'}}><i class="fas fa-envelope"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:mountainsrover@gmail.com">mountainsrover@gmail.com </a></p>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign: "center", fontWeight: 'bolder', fontSize: '20px'}}><i class="fas fa-mobile-alt"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></p>
      </div>
    </div>
  </div>
    </Col>
  </Row>
</Container>


<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_1.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_2.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_3.jpg"/>
    </Col>

    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_4.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_5.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_6.jpg"/>
    </Col>

    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_7.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_8.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/rafting/raft_9.jpg"/>
    </Col>
    </Row>
</Container>



</div>
    )


}
}



export default Rafting;