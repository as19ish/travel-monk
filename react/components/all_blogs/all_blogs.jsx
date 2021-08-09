import React, { Component } from "react";
import axios from 'axios';
import './all_blogs.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Modal,Image} from 'react-bootstrap';

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
         LATEST UPDATE
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

class Blog_component extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
                  flag:false,
                  modal_data:'',
                  title:'',
                  src:''
                  };
  }
render() {

let variant = this.props.blogs;
    return (
	<React.Fragment>
	<div className="col-lg-4 col-md-4 testimonials-item " onClick={()=>{this.setState({src:"/static/media/"+variant.blog_image,flag:true, modal_data:variant.blog_details,title:variant.blog_title})}}>
      <div className="carousel-item-c">
              <div className="card-box-b h- card-shadow news-box mb-3">
                <div className="img-box-b">
                  <img src={"/static/media/"+this.props.blogs.blog_image} alt="" className="img-b img-fluid" style={{height:'280px'}}/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b h-card-head">
                    <div className="card-category-b">
                      <a className="category-b">News</a>
                    </div>
                    <div className="card-title-b" style={{margin:"10px 0px"}}>
                      <p className="title-2">
                        <a style={{color: "#fff",margin:"10px 0px"}}>{this.props.blogs.blog_subject}</a>
                      </p>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
	<MyVerticallyCenteredModal
                  show={this.state.flag}
                  data={this.state.modal_data}
              title={this.state.title}
              src={this.state.src}
                  onHide={() => this.setState({flag:false})}
                />
      </React.Fragment>
    

        );
  }
}

class all_blogs_component extends React.Component {

constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state={blogs: {}}
//  this.handleOptionChange = this.handleOptionChange.bind(this);
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'

axios.get('/view_blogs_ALL/'/*{params:{gender:getState().gender.gender_selected,item:getState().show.item_selected}}*/)
      .then(res => {
        
        this.setState({blogs: res.data.blogs})
      })


}

componentDidUpdate(){

  $( document ).ready(function() {


    // external js: isotope.pkgd.js
    
    // store filter for each group
    var buttonFilters = {};
    var buttonFilter;
    // quick search regex
    var qsRegex;
    
    // init Isotope
    var $grid = $('.testimonials-container-blog').isotope({
      itemSelector: '.testimonials-item',
      filter: function() {
        var $this = $(this);
        var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
        var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
        return searchResult && buttonResult;
      },
    });
    
    $('#testimonials-flters li').on( 'click',function() {
      var $this = $(this);
      $("#testimonials-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      // get group key
      var $buttonGroup = $this.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      buttonFilters[ filterGroup ] = $this.attr('data-filter');
      // combine filters
      buttonFilter = concatValues( buttonFilters );
      // Isotope arrange
      $grid.isotope();
    });
    
    // use value of search field to filter
    var $quicksearch = $('.quicksearch').keyup( debounce( function() {
      qsRegex = new RegExp( $quicksearch.val(), 'gi' );
      $grid.isotope();
    }) );
    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }
    
    // debounce so filtering doesn't happen every millisecond
    function debounce( fn, threshold ) {
      var timeout;
      threshold = threshold || 100;
      return function debounced() {
        clearTimeout( timeout );
        var args = arguments;
        var _this = this;
        function delayed() {
          fn.apply( _this, args );
        }
        timeout = setTimeout( delayed, threshold );
      };
    } 
    
    
    
    });
}


    render() {


let blog_length=Object.keys(this.state.blogs).length
//let track_media_length=Object.keys(this.state.track_media).length

//
let items=[]
for(let i=0;i<blog_length;i++ )
                 {                 
                   items.push(<Blog_component blogs={this.state.blogs[i]} index={i}/>)
                 }
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
                 <h2 className="animate__animated animate__fadeInDown">NEWS</h2>
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });
                 
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
                 
                                    <section id="testimonials" className="courses section-bg">
                                     <div className="container" data-aos="fade-up">
                                       <div className="section-header" style={{marginBottom:"50px"}}>
                                         <h3>Latest News Updates</h3>
                                       </div>
                 
                                       <div className="row" data-aos="fade-up" data-aos-delay="100">
                                           <div className=" col-lg-4"></div>
                                           <div className=" col-lg-4" style={{marginBottom: "25px"}}>
                                           <p><input type="text" className="quicksearch input-sm form-control" placeholder="news title/keyword" /></p>
                                             </div>
                                             <div className=" col-lg-4"></div>
                                           </div>
                 
                                       <div className="row testimonials-container-blog" data-aos="fade-up" data-aos-delay="200">
                                       {items}
                                       </div>
                                     </div>
                                   </section>
                 
                       </div>
                           
                         );
  }
}



export default all_blogs_component;