import React, { Component } from "react";
import axios from 'axios';
import Track_image_cards_template from '../track_image_cards/track_image_cards_template';
import { Jumbotron, Container, Button,InputGroup,FormControl,Row,Col,Breadcrumb,Image} from 'react-bootstrap';
import { withRouter } from "react-router";
import queryString from 'query-string';
class all_track_component extends Component {

constructor(props) {
  super(props);
  this.state={
	          loading:false,
              track: {},
              track_media:{},
              difficulty_list:[],
              sorted_track:[],
              sorted_track_media:[],
              check_data:[],
              description:''
             }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(index,e)
{
 this.setState({loading:true})
 
 let map=this.state.check_data
if(map.get(index))
{
  map.set(index,false)
}
else
{
  map.set(index,true)
}
this.setState({loading:false,check_data:map})  

}
componentDidMount()
{

document.getElementById('call_back_fixed_button_id').style.display='block'

this.setState({loading:true})

let parameters = queryString.parse(this.props.location.search);  // using npm- queryString package.. getting the route parameters.
//type can be All OR Season OR Category....type is used to decide the table to filter and sub_type for column
axios.get('/view_tracks_ALL/',{params:parameters})
      .then(res => {
        
        let map = new Map();
        for(let i=0;i<res.data.difficulty_list.length;i++)
        {
          map.set(i,false)
        }
        this.setState({
			            loading:false,
						track: res.data.track,
                       track_media: res.data.track_media,
                       difficulty_list: res.data.difficulty_list,
                       sorted_track: res.data.track,
                       sorted_track_media: res.data.track_media,
                       check_data:map,
                       description:res.data.description
                        })
      })


}

componentDidUpdate(){

  $( document ).ready(function() {
  // Configure/customize these variables.
  var showChar = 15;  // How many characters are shown by default
  var ellipsestext = "...";
  // var moretext = "Show more >";
  // var lesstext = "Show less";
  let moretext = `<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>`;
  let lesstext = `<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>`;
  

  $('.more_track_card').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + '<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>' + '</a></span>';

          $(this).html(html);
      }

  });

  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  });;

// external js: isotope.pkgd.js

// store filter for each group
var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },
});

$('#portfolio-flters li').on( 'click',function() {
  var $this = $(this);
  $("#portfolio-flters li").removeClass('filter-active');
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

  let params = queryString.parse(this.props.location.search);  

let filter=[]   //list of difficulty level names on which treks will be filtered....
if(this.state.difficulty_list.length!=0)
{
for(let i=0; i<this.state.difficulty_list.length; i++)
{
    
    if(this.state.check_data.get(i))
    {
      filter.push(this.state.difficulty_list[i])
    }

}

}


let local_track=this.state.sorted_track
let local_track_media=this.state.sorted_track_media


if(filter.length!=0)
{

  local_track=[]
  local_track_media=[]
  for(let x of filter)
  {
    let trek=this.state.track
    let media=this.state.track_media
    /* for(let i=0;i<trek.length;i++)
     {
     
       if(trek[i]['track_difficulty'].toUpperCase()==x.toUpperCase())
       { 
       
         local_track.push(trek[i])
         local_track_media.push(media[i])
       }
     }*/
     for(let i=0;i<media.length;i++)
     {
     
       if(trek[i]['track_difficulty'].toUpperCase()==x.toUpperCase())
       {
       
         local_track.push(trek[i])
         local_track_media.push(media[i])
       }
     }

  }

}



    let dif_length=this.state.difficulty_list.length;
    let difficulty=[]
    for(let i=0;i<dif_length;i++)
    {
      difficulty.push(
                       <Col> <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={(e)=>this.handleChange(i,e)} />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" style={{fontWeight:'bold',textTransform:'uppercase',fontSize:'14px', width:'auto'}} value={this.state.difficulty_list[i]} disabled/>
                        </InputGroup>
                      </Col>
                      )
    }



let track_length=local_track.length
let track_media_length=local_track_media.length


let items=[]
/*for(let i=0;i<track_length;i++ )
                 {
                   items.push(<Track_image_cards_template track={local_track[i]} track_media={local_track_media[i]}/>)
                 }*/
    for(let i=0;i<track_media_length;i++ )
                 {
                   items.push(<div className={"col-lg-3 col-md-3 portfolio-item "+local_track[i].track_difficulty.toLowerCase()}><div style={{marginBottom:"15px"}}><Track_image_cards_template track={local_track[i]} track_media={local_track_media[i]}/></div></div>)
                 }



                 let src = "/static/media/home_images/";
                 //let images = ["3.jpg","28.jpg","6.jpg","7.jpg","10.jpg","13.jpg","15.jpg","16.jpg","18.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
                 let images = ["3.jpg"];
                 let elements = images.map((element,i,arr) => {
                   let style_obj ={
                     backgroundImage : "url("+src+element+")"
                   }

                   console.log('params = ', params)
                   let cls = i==0?"carousel-item active":"carousel-item";
                   return <div className={cls} style={style_obj}>
                             <div className="carousel-container">
                               <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">{params.sub_type.toUpperCase()}</h2>
                  {/* <p className="animate__animated animate__fadeInUp">{this.state.description}</p> */}
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });
                
                   




    return (
    <div className=''>
 {
 /*<Image src="/tourism_project/static/media/trekk.JPG" fluid />
this.props.location.state.sub_type!='all'?<Container fluid>
<Jumbotron style={{marginTop:'2rem',textAlign:'center',fontFamily:'fantasy',textTransform:'uppercase'}}>
  <h1>{this.props.location.state.sub_type} treks</h1>
  <p>{this.state.description}</p>
</Jumbotron>
</Container>:null*/
}
 
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

			{this.state.loading?<div style={{paddingTop:'15%',paddingBottom:'15%'}}><Loading/></div>:
			<div>

  <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
      <div className="row" data-aos="fade-up" data-aos-delay="100">
      <div className=" col-lg-4"></div>
      <div className=" col-lg-4">
      <p><input type="text" className="quicksearch input-sm form-control" placeholder="Search by trek name" /></p>
        </div>
        <div className=" col-lg-4"></div>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay="100">      
      <div className=" col-lg-12">
          <ul id="portfolio-flters" className="button-group data-filter-group">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".easy" >Easy</li>
            <li data-filter=".moderate" >Moderate</li>
            <li data-filter=".difficult" >Difficult</li>
          </ul>
        </div>
      </div>
  <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    {items}
  </div>
  </div>
  </section>
			 </div>
			}
    </div>
        );
  }
}

function Loading() {
  return <div className="container_loading">
  <div className="bar1 bar"></div>
  <div className="bar2 bar"></div>
  <div className="bar3 bar"></div>
  <div className="bar4 bar"></div>
  <div className="bar5 bar"></div>
  <div className="bar6 bar"></div>
  <div className="bar7 bar"></div>
  <div className="bar8 bar"></div>
  <div className="bar9 bar"></div>
  <div className="bar10 bar"></div>

  <div className="progressContainer">
    <div className="progress"></div>
  </div>
</div>

}

export default withRouter(all_track_component);
