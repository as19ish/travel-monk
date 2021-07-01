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
<h2 className="all_blogs_heading" style={{marginTop:'10px',marginBottom:'0.5rem'}}>Customized Student Trip with <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
<Container fluid className='rafting_container_padding'>
  <Row>
    <Col sm={12} md={12} lg={8}>
    <Youtube_player videoId={videoId} height={height} width={width}/>
    <br/>
   <h2 className="all_blogs_heading">Customize Student Trip with <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
   <br/>
   <div className='padding_20'>
    <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
      You can cusotimze your treks as per your choice. For more details please contact us.
	</p>
	
	<h5 style={{textAlign:'left',fontWeight:'500'}}>Contact At <a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:mountainsrover@gmail.com">mountainsrover@gmail.com </a> OR Call / Whatsapp Number <a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></h5>
	<br/>
	</div>
<Container fluid>
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