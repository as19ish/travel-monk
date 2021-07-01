import React, { Component } from "react";
import axios from 'axios';
import './all_reviews.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Image} from 'react-bootstrap';

class Review_component extends React.Component {
render() {
let data_array=this.props.reviews
let stars=[]
for(let i=0;i<parseInt(data_array.star);i++)
{
stars.push(<i className="fa fa-star" aria-hidden="true"></i>);
}
    return (
<div className={"testimonial-item "+data_array.name.trim().split(' ')[0]} style={{minHeight:'200px'}}>
  <Row>
    <Col className="col-lg-4 col-12" style={{textAlign:'center'}}><img src={"/static/media/"+data_array.photo} className="testimonial-img" alt=""/>
          <h3 style={{textTransform:'capitalize'}}>{data_array.name}</h3>
          <section className="rating-wrapper">{stars}</section> 
          <h4>{data_array.trek_name}</h4></Col>
    <Col className="col-lg-8 col-12" style={{paddingTop:'20px'}}>
<div className="modi" style={{position:'relative'}}>
    <p><img src="/static/assets/img/quote-sign-left.png" class="quote-sign-left" alt=""/>{data_array.description}<img src="/static/assets/img/quote-sign-right.png" class="quote-sign-right" alt=""/></p>
</div>   

    </Col>
    </Row>
         
        </div>

          
        );
  }
}

class all_blogs_component extends React.Component {

constructor(props) {
                      super(props);
                      this.state = {reviews:[],
                                      };
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'
axios.get('http://localhost:8000/view_reviews/')
      .then(res => {
        this.setState(res.data)
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
var $grid = $('.testimonials-container').isotope({
  itemSelector: '.testimonial-item',
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


let review_length=Object.keys(this.state.reviews).length;
let items=[];
let name_filters= [];
for(let i=0;i<review_length;i++ )
                 {
                  if(i == 0){
                    name_filters.push(<li data-filter="*" className="filter-active">All</li>);
                   }
                   name_filters.push(<li data-filter={"."+this.state.reviews[i].name.trim().split(' ')[0]}>{this.state.reviews[i].name}</li>)
                    items.push(<Review_component reviews={this.state.reviews[i]} index={i}/>)
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
<h2 className="animate__animated animate__fadeInDown">What People Say About Us <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;REVIEWS</span></h2>
                {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
              </div>
            </div>
        </div>
  
});

console.log("reviews",this.state)
    return (
      <div>
                    <section id="intro" className="height_450px">
                     <div className="intro-container">
                       <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                 
                         <ol className="carousel-indicators"></ol>
                 
                         <div className="carousel-inner" role="listbox">            
                          {elements}
                         </div>
                 
                         <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                         </a>
                 
                         <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                         </a>
                 
                       </div>
                     </div>
                   </section>

                   <section id="testimonials" className="courses section-bg">
                    <div className="container" data-aos="fade-up">
                      <div className="section-header">
                        <h3>Reviews</h3>
                      </div>

                      <div className="row" data-aos="fade-up" data-aos-delay="100">
                          <div className=" col-lg-4"></div>
                          <div className=" col-lg-4">
                          <p><input type="text" className="quicksearch input-sm form-control" placeholder="Trekker name / trek name" /></p>
                            </div>
                            <div className=" col-lg-4"></div>
                          </div>

                          <div className="row" data-aos="fade-up" data-aos-delay="100">      
                          <div className=" col-lg-12">
                              <ul id="testimonials-flters" className="button-group data-filter-group">
                                {name_filters}
                              </ul>
                            </div>
                          </div>

                          <div className="row testimonials-container" data-aos="fade-up" data-aos-delay="200">
                      {items}
                      </div>
                    </div>
                  </section>

              </div>
        );
  }
}



export default all_blogs_component;