import React, { Component, Suspense } from "react";
import axios from 'axios';
import Track_image_cards_template from './track_image_cards_template';
// import Youtube_player from '../youtube/youtube';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Slider_Article = React.lazy(() => import('../slider_Article/slider_Article'));
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
class track_image_cards extends Component {


constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state={track: {},track_media:{}, track1:{},track_media1:{} }
//  this.handleOptionChange = this.handleOptionChange.bind(this);
}
componentDidMount()
{


document.getElementById('call_back_fixed_button_id').style.display='block'


axios.get('/view_tracks/')
      .then(res => { 
        
        this.setState({track: res.data.track,track_media: res.data.track_media,track1: res.data.track1,track_media1: res.data.track_media1})
      })


}


    render() {

let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId_1 =  'olJbD9KSg2M';
let videoId_2 =  'duF-iVJoZrA';
let videoId_3 = 'ZSKMmCxoGHc';
let videoId_4 = 'oPZ2Q_AaajQ';
let videoId_5 = 'a8VdP_JLPiA';
let videoId_6 = 'vjmwT2nWGx4';
let height = '390';
let width = '100%';
let track_media_length=Object.keys(this.state.track_media).length
let track_media_length1=Object.keys(this.state.track_media1).length

let items=[];
for(let i=0;i<track_media_length;i++ )
  {
          items.push(<Track_image_cards_template track={this.state.track[i]} track_media={this.state.track_media[i]}/>)
  }

let items1=[];
for(let i=0;i<track_media_length1;i++ )
    {
          items1.push(<Track_image_cards_template track={this.state.track1[i]} track_media={this.state.track_media1[i]}/>)
    }

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
                      items: 4
                    },
                
                    1024: {
                      items: 4
                    },
                
                    1366: {
                      items: 4
                    }
                  }
                };

                let options_1 = {
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

				 
    return (
    <div>
    {items.length>0?<section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header" style={{paddingBottom:'0px'}}>
          <h3 className="section-title">Latest Trek</h3>
        </header>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div className="col-sm-12 col-md-12 col-lg-12" >
        <OwlCarousel
            className="owl-theme home-our-treks"
            {...options}>
              {items}
            </OwlCarousel>
          </div>            
        </div>
      </div>
      <div style={{marginTop:'0px',textAlign:'center'}}>
      <a href="/all_tracks?type=all&sub_type=all" className="common_btn btn-get-started scrollto animate__animated animate__fadeInUp">View All</a>
      </div>
      </section>:null}

       {/* <section id="">
          <div class="container" data-aos="fade-up">
            <div class="facts-img">
            <Youtube_player videoId={videoId_1} height={height} width={width}/>
                
            </div>

          </div>
    </section> */}

    <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Slider_Article/>
		</Suspense>

    {items1.length>0?<section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header" style={{paddingBottom:'0px'}}>
          <h3 className="section-title">Trek of this month</h3>
        </header>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-sm-12 col-md-12 col-lg-12" >
          <OwlCarousel
            className="owl-theme home-our-treks"
            {...options}>
              {items1}
            </OwlCarousel> 
            </div>            
        </div>
      </div>
      <div style={{marginTop:'0px',textAlign:'center'}}>
      <a href="/all_tracks?type=all&sub_type=all" className="common_btn btn-get-started scrollto animate__animated animate__fadeInUp">View All</a>
      </div>
      
      </section>:null}

      					 
			 
    </div>
        );
  }
}

export default track_image_cards;
