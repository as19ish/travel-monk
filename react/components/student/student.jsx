import React, { Component } from "react";
import axios from 'axios';
import './student.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class Student extends React.Component {
render() {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = 'KM67Q8c56lc';
let height = '390';
let width = '100%';
    return (

<div>
<div className='div_static_back_student'>
</div>
<h2 className="all_blogs_heading" style={{marginTop:'30px',marginBottom:'30px'}}>Customized Student Trips</h2>
<Container fluid className='rafting_container_padding'>
  <Row>
    <Col sm={12} md={12} lg={8}>
    <Youtube_player videoId={videoId} height={height} width={width}/>
    <br/>
   
   <div className='padding_20'>
    <p style={{fontSize:'18px', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
      You can customize your treks as per your choice. For more details please contact us.
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
	</div>
<Container fluid style={{marginTop: "30px"}}>
  <Row>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/student/stud1.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/student/stud2.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/student/stud3.jpg"/>
    </Col>

    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/student/stud4.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/student/stud5.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud6.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud7.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud8.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud9.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud10.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud11.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/student/stud12.jpg"/>
    </Col>
    </Row>
</Container>




    </Col>
    <Col sm={12} md={12} lg={4}><div className='track_detail_form_container'><Form_component data={data} /></div></Col>
  </Row>
</Container>



</div>
    )


}
}



export default Student;