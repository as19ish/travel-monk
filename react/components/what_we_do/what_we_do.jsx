import React, { Component } from "react";
import axios from 'axios';
import './what_we_do.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class Wwd extends React.Component {
render() {

  let src = "/static/media/home_images/";
                 //let images = ["3.jpg","28.jpg","6.jpg","7.jpg","10.jpg","13.jpg","15.jpg","16.jpg","18.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
                 let images = ["3.jpg"];
                 let elements = images.map((element,i,arr) => {
                   let style_obj ={
                     backgroundImage : "url("+src+element+")"
                   }

                   let cls = i==0?"carousel-item active":"carousel-item";
                   return <div className={cls} style={style_obj}>
                             <div className="carousel-container">
                               <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">WHAT <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;WE DO</span></h2>
                  {/* <p className="animate__animated animate__fadeInUp">{this.state.description}</p> */}
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });

let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = 'KM67Q8c56lc';
let height = '390';
let width = '100%';
    return (

<div>
<section id="intro" className="height_450px">
                     <div className="intro-container">
                       <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                 
                         <ol className="carousel-indicators"></ol>
                 
                         <div className="carousel-inner" role="listbox">            
                          {elements}
                         </div>
                 
                         {/* <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                         </a>
                 
                         <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                         </a> */}
                 
                       </div>
                     </div>
                   </section>

<h2 className="all_blogs_heading" style={{marginTop:'30px',marginBottom:'30px'}}>What We Do</h2>
<Container fluid className='rafting_container_padding'>
  <Row>
    <Col sm={12} md={12} lg={8}>
    <Youtube_player videoId={videoId} height={height} width={width}/> 
    <br/>

   <div className='padding_20'>
    <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
	We Hike2Heaven provide you everlasting feeling of trekking and traveling Meet As UNKNOWN And Leave As WELL-KNOWN. 
	Give a Chance to Us for Exploring the Place in A Different Manner. You are most Welcome as Couple as well As Groups.
	<br/>
	</p>
	
  <div style={{marginTop:"30px",marginBottom:"30px"}}>
    <h6>
  You can customize your treks as per your choice. For more details please contact us.</h6>
  </div>

  <div className="row">
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign:'center',fontWeight:'600'}}><i class="fas fa-envelope"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:mountainsrover@gmail.com">mountainsrover@gmail.com </a></p>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign: "center", fontWeight: '600'}}><i class="fas fa-mobile-alt"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></p>
      </div>
    </div>
  </div>
	<br/>
	</div><br />
<Container fluid>
  <Row>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/what_we_do/wed1.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/what_we_do/wed2.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/what_we_do/wed3.jpg"/>
    </Col>

    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/what_we_do/wed4.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/what_we_do/wed5.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed6.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed7.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed8.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed9.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed10.jpg"/>
    </Col>
	<Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
		 <Image className='h_w_img' src="/static/media/what_we_do/wed11.jpg"/>
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



export default Wwd;