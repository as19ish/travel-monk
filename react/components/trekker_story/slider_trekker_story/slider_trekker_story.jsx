import React from "react";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Modal,Image } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MyVerticallyCenteredModal(props) {
	
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{color:'white'}}
    >
      <Modal.Header closeButton className="modal_cross_sign_white" style={{background:'black'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem'}}>
         TREKKER STORY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.title}
        </p>
		<br/>
		<Image src={props.src} thumbnail /><br/><br/>
        <p id='replace_br' style={{whiteSpace:'pre-line',color:'#191919',fontSize:'1.4rem',fontWeight:'600'}}>
          {props.data}
        </p>
      </Modal.Body> 
    </Modal>
  );
}

class Slider_trekker_story extends React.Component {

constructor(props) {
                        super(props);
                        this.state = {stories:[],
                                      flag:false,
                                      modal_data:'',
                                      title:'',
                                      src:''
                                      };
                      }

componentDidMount()
{

axios.get('/view_trekker_story_4/')
      .then(res => {

        this.setState(res.data)

      })
}


  render() {

    let options = {
      autoplay: false,
      lazyLoad: true,
      rewind: true,
      margin: 20,
       
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
     
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 600,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 3
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    };

  let cards=[];
  cards=this.state.stories.map((variant, idx) => {
   
  
    return <div className="col-lg-12 col-md-12 d-flex align-items-stretch" style={{cursor:'pointer'}}>
          <div className="course-item" onClick={()=>{this.setState({src:"/static/media/"+variant.trek_photo,flag:true, modal_data:variant.description,title:variant.name+"'s Story"})}}>
            {/* <img src={"/static/media/"+variant.trek_photo} className="img-fluid" alt="..." style={{height:'200px',width:'100%'}}/> */}
            <LazyLoadImage
              alt='...'
              src={"/static/media/"+variant.trek_photo} // use normal <img> attributes as props
              width='100%'
              height='150px' />
              <div className="trainer">
                <div className="trainer-profile">                {/* <img src={"/static/media/"+variant.profile_photo} className="img-fluid" alt=""/> */}
                  <LazyLoadImage
                  className="img-fluid"
                  alt='trekker-img'
                  src={"/static/media/"+variant.profile_photo} />
                  
                  
                </div>
              </div>
            <div className="course-content">
            <span style={{marginTop:"10px",fontSize:"20px"}}>{variant.name}</span>
              <div className="mb-3">
                <h4 >{variant.trek_name}</h4>
              </div>
              <p style={{marginBottom:'0'}}>{variant.description.substring(0, 120).concat('.... ')}</p>
              
            </div>
          </div>
          </div>
    });

console.log('stories = ',this.state.stories);

return(
<div>
<section id="testimonials" className="courses section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h3>Trekker stories</h3>
      </div>

      <div className="mt-40">
      {cards.length>0?<div className="row" data-aos="zoom-in" data-aos-delay="100">
      <OwlCarousel
            className="owl-theme"
            {...options}>
              {cards}
            </OwlCarousel>
      </div>:null}
      </div>

    </div>
    <div style={{marginTop:'10px',textAlign:'center'}}>
      <a href="/all_trekker_stories" className="common_btn btn-get-started scrollto animate__animated animate__fadeInUp">View All</a>
      </div>
  </section>



<MyVerticallyCenteredModal
        show={this.state.flag}
        data={this.state.modal_data}
		title={this.state.title}
		src={this.state.src}
        onHide={() => this.setState({flag:false})}
      />
      </div>

)
  }
}

export default Slider_trekker_story;
