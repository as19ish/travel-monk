import React, { Component } from "react";
import axios from 'axios';
import { Modal,Image } from 'react-bootstrap';

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
        <p id='replace_br' style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'600'}}>
          {props.data}
        </p>
      </Modal.Body> 
    </Modal>
  );
}

class Stories_component extends React.Component {

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
let data_array=this.props.stories
    return (
      <React.Fragment>
        <div className={"col-lg-4 col-md-3 testimonials-item "+data_array.name.trim().split(' ')[0]} onClick={()=>{this.setState({src:"/static/media/"+data_array.trek_photo,flag:true, modal_data:data_array.description,title:data_array.name+"'s Story"})}} style={{cursor:'pointer'}}>
                  <div className="course-item">
                    <img src={"/static/media/"+data_array.trek_photo} className="img-fluid" alt="..." style={{height:'200px',width:'100%'}}/>
                    <div className="course-content" style={{backgroundColor:'white'}}>
                      <div className="d-flex justify-content-between align-items-center mb-3 trek_name">
                        <h4>{data_array.trek_name}</h4>
                      </div>

                      {/* <h3><a href="course-details.html">Story</a></h3> */}
                      <p style={{marginBottom:'0'}}>{data_array.description.substring(0, 120).concat('.... ')}</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src={"/static/media/"+data_array.profile_photo} className="img-fluid" alt=""/>
                          <span>{data_array.name}</span>
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

class All_trekker_story extends React.Component {

constructor(props) {
                      super(props);
                      this.state = {stories:[],
                                      };
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'
axios.get('/view_trekker_story/')
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

let stories_length=Object.keys(this.state.stories).length
let items=[]
let name_filters= []
for(let i=0;i<stories_length;i++ )
                 {
                   if(i == 0){
                    name_filters.push(<li data-filter="*" className="filter-active">All</li>);
                   }
                   name_filters.push(<li data-filter={"."+this.state.stories[i].name.trim().split(' ')[0]}>{this.state.stories[i].name}</li>)
                   items.push(<Stories_component stories={this.state.stories[i]} index={i}/>)
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
<h2 className="animate__animated animate__fadeInDown">THE BEST EXPERIENCES <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;TREKKER STORIES</span></h2>
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
                        <h3>Trekker stories</h3>
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



export default All_trekker_story;