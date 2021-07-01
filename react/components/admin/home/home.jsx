import React, { Component } from "react";
import './home.css'
import axios from 'axios'
import { Tabs, Tab, Container,Row,Col,Accordion,Card} from 'react-bootstrap';
import Season_form from '../season/season'
import Category_form from '../category/category'
import Track_detail_form from '../track_details/track_details'
import ImageUpload from '../track_images/track_images'
import Day_plan from '../day_plan/day_plan'
import Inquery from '../inquery/inquery'
import Sub_day_plan from '../sub_day_plan/sub_day_plan'
import Blog from '../blogs/blogs'
import Add_track_season_category from '../Add_track_season_category/Add_track_season_category'
import Review from '../review/review'
import Trekker_story from '../trekker_story/trekker_story'
import Event from '../events/events_form'
import Event_article from '../events/event_article/event_article'
import Slider_images from '../Slider_images/Slider_images'

class Home extends React.Component {
  constructor() {
    super();
    this.state={check: false}
     this.handleClick = this.handleClick.bind(this);
  }

handleClick()
{
 
}
  render() {
  
    return (
 <div>
    <Inquery/>
	<Review/>
	<Trekker_story/>
    <Tabs defaultActiveKey="season" id="uncontrolled-tab-example" onClick={()=>this.setState(prevState => ({check: !prevState.check}))} >
          <Tab eventKey="season" title="SEASON / CATEGORY">
           <Container className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
<div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Update Season / Category</span>
 </div>
                 <div id='success_message12' className="alert12 alert-success12" style={{display: 'none',borderRadius:'15px'}}>
                   <div className="form_success_msg12">
                       <strong>Success!</strong>
                    </div>
                </div>
                 <Add_track_season_category/>
                </Container>

             <Container className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
                  <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0"style={{background:'#FFCC03',textAlign:'center',cursor:'pointer',textTransform:'uppercase',fontWeight:'bold'}}>
                          Add Season/Category
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                              <Season_form />
                              <Category_form/>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                   </Accordion>
                  </Container>

          </Tab>
          <Tab eventKey="track_info" title="TRACK DETAILS">
            <Track_detail_form/>
          </Tab>
          <Tab eventKey="image_upload" title="UPLOAD IMAGES">
            <ImageUpload/>
          </Tab>
          <Tab eventKey="day_plan" title="DAY PLAN">
            <Day_plan/>
          </Tab>
          <Tab eventKey="Sub_day_plan" title="SUB DAY PLAN">
            <Sub_day_plan/>
          </Tab>
          <Tab eventKey="blog" title="LATEST UPDATE">
            <Blog/>
          </Tab>		  
		  <Tab eventKey="event" title="EVENT/ARTICLE">
          <Event/>
          </Tab>
		   <Tab eventKey="event_delete" title="DELETE EVENT/ARTICLE ">
          <Event_article/>
          </Tab>
        
          <Tab eventKey="slider_image" title="Slider-Images ">
            <Slider_images/>
          </Tab>

        </Tabs>
</div>
      )
      }
}
      export default Home