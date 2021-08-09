import React, {Component,Suspense} from "react";
import { Route} from 'react-router-dom'
import './MainComponent.css'
import Header_component from '../header_component/header_component'
import Header_Nav_List_Component from '../header_component/header_nav_list_component'
import Footer_Component from '../footer_component/footer_component'
import Request_callback from '../request_callback/request_callback'
import Extra_slider from '../extra_slider/extra_slider'
import Extra1 from '../extra1/extra1';
import Social_media_section from '../social_media_section/social_media_section'

const Track_details = React.lazy(() => import('../track_details/track_details'));
const Divert = React.lazy(() => import('../track_details/divert'));
const Slider_trekker_story = React.lazy(() => import('../trekker_story/slider_trekker_story/slider_trekker_story'));
const Slider_review = React.lazy(() => import('../slider_review/slider_review'));
const Track_image_cards = React.lazy(() => import('../track_image_cards/track_image_cards'));
const Slider1 = React.lazy(() => import('../slider1/slider1'));
const All_tracks = React.lazy(() => import('../all_track_component/all_track_component'));
const All_blogs = React.lazy(() => import('../all_blogs/all_blogs'));
const Search_result_component = React.lazy(() => import('../search_result_component/search_result_component'));
const Admin_login = React.lazy(() => import('../admin/login/admin_login'));
const Home = React.lazy(() => import('../admin/home/home'));
const Review_form = React.lazy(() => import('../review_form/review_form'));
const All_reviews = React.lazy(() => import('../all_reviews/all_reviews'));
const Trekker_story_form = React.lazy(() => import('../trekker_story/trekker_story_form/trekker_story_form'));
const All_trekker_story = React.lazy(() => import('../trekker_story/all_trekker_story/all_trekker_story'));
const Event_article = React.lazy(() => import('../event_article/event_article'));
const Activity_modal = React.lazy(() => import('../activity_modal/activity_modal'));
const Rafting = React.lazy(() => import('../rafting/rafting'));
const Chardham = React.lazy(() => import('../chardham/chardham'));
const Customize = React.lazy(() => import('../customization/customize'));
const Student = React.lazy(() => import('../student/student'));
const Tea_house = React.lazy(() => import('../all_about_tea_house/all_about_tea_house'));
const What_we_do = React.lazy(() => import('../what_we_do/what_we_do'));
const About_us = React.lazy(() => import('../about_us/about_us'));
const Save_himalaya = React.lazy(() => import('../save_himalaya/save_himalaya'));
const Photos = React.lazy(() => import('../photos/photos'));
const Faq = React.lazy(() => import('../faq_modal/faq_modal'));


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
class MainComponent extends Component {
	
	componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

    render() {

    console.log('render main');

    return (
    <div>
	            
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/home"  component={Slider1}/>
					<Route path="/" exact component={Slider1}/>				
				</Suspense>
				
				
				
                <Route path="/"  component={Request_callback}/>
				
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/latest_updates"  component={All_blogs}/>
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				 <Route path="/home"  component={Track_image_cards}/>
				<Route path="/" exact component={Track_image_cards}/> 
				</Suspense>
				
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/review_form"  component={Review_form}/>
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/trekker_story_form"  component={Trekker_story_form}/>
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/all_tracks"  component={All_tracks}/>
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/Track_details"  component={Track_details}/> 
				</Suspense>
        
        <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/track_detail/"  component={Divert}/> 
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/search"  component={Search_result_component}/>
				</Suspense>

				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/home"  component={Slider_trekker_story}/>
					<Route path="/" exact component={Slider_trekker_story}/> 
				</Suspense>

				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
				<Route path="/home"  component={Faq}/>
					<Route path="/" exact component={Faq}/> 
				</Suspense>

                
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
                
					<Route path="/home"  component={Slider_review}/>
					<Route path="/" exact component={Slider_review}/>
				</Suspense>

				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
                
					<Route path="/home"  component={Extra1}/>
					<Route path="/" exact component={Extra1}/>
				</Suspense>
					
					
				 
					
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/all_reviews"  component={All_reviews}/>
					<Route path="/all_trekker_stories"  component={All_trekker_story}/>
					<Route path="/event_article"  component={Event_article}/>
				 </Suspense>
				 
								
                <Route path="/"  component={Header_Nav_List_Component}/>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/admin_login"  component={Admin_login}/>
					<Route path="/Admin_Home_Component"  component={Home}/>
				</Suspense>
				
				<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/rafting"  component={Rafting}/>
				 </Suspense>
				   
				   <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/chardham"  component={Chardham}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/customize"  component={Customize}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/student"  component={Student}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/tea_house"  component={Tea_house}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/what_we_do"  component={What_we_do}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/about_us"  component={About_us}/>
				 </Suspense>
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/save_himalaya"  component={Save_himalaya}/>
				 </Suspense>
				 
				 {/* <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/videos"  component={Videos}/>
				 </Suspense> */}
				 
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
					<Route path="/photos"  component={Photos}/>
				 </Suspense>
				 
				 
				 <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
                 
					<Route path="/"  component={Footer_Component}/>
				 
				 </Suspense>
				   
				   
				 

 
        </div>
        );
  }
}

export default MainComponent;