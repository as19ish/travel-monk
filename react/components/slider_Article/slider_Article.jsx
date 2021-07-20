import React from "react";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
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
         LATEST UPDATES
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.title}
        </p>
		<br/>
		<Image src={props.src} thumbnail /><br/><br/>
        <p id='replace_br' style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'600'}}>
          {props.data}
        </p>
      </Modal.Body> 
    </Modal>
  );
}

class slider_Article extends React.Component {

constructor(props) {
                        super(props);
                        this.state = {posts:[],
										flag:false,
                                      modal_data:'',
									  title:'',
									  src:''
                                      };
                      }

componentDidMount()
{

axios.get('/view_posts/')
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

  let cards=this.state.posts.map((variant, idx) => {

    return <div className="carousel-item-c" onClick={()=>{this.setState({src:"/static/media/"+variant.blog_image,flag:true, modal_data:variant.blog_details,title:variant.blog_title})}}>
        <div className="card-box-b card-shadow news-box">
          <div className="img-box-b">
            {/* <img src={"/static/media/"+variant.blog_image} alt="" className="img-b img-fluid" style={{height:'280px'}}/> */}
            <LazyLoadImage
                  height='280px'
                  className="img-b"
                  alt='...'
                  src={"/static/media/"+variant.blog_image} />
          </div>
          <div className="card-overlay">
            <div className="card-header-b">
              <div className="card-category-b">
                <a href="#" className="category-b">News</a>
              </div>
              <div className="card-title-b">
                <h2 className="title-2">
                  <a href="blog-single.html">{variant.blog_title}</a>
                </h2>
              </div>
              <div className="card-date">
                <span className="date-b">18 Sep. 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  });



return(
<div>

<section className="" id="testimonials">
  <div className="container" data-aos="fade-up">
  <div className="section-header">
        <h3>Latest Updates</h3>
      </div>
      {cards.length>0?<OwlCarousel
            className="owl-theme"
            {...options}>
              {cards}
            </OwlCarousel>:null}
  </div>
  <div style={{marginTop:'10px',textAlign:'center'}}>
      <a href="/latest_updates" className="common_btn btn-get-started scrollto animate__animated animate__fadeInUp">View All</a>
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

export default slider_Article;
