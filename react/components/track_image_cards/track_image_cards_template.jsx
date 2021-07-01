import React, { Component } from "react";
import './track_image_cards.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import { Route,Redirect,Link} from 'react-router-dom'
import { Jumbotron, Container ,Button,Row,Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {useState,useEffect,useRef} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Track_image_cards_template extends React.Component {

  constructor(props) {
                          super(props);
                          this.state = {};
                        }
  
  componentDidMount()
  {
  
  
  
  }
render()
{
  return (

    <div className="home-our-trek-box">
    <a href={"/track_detail/"+this.props.track.track_name} className="card_link">
    <div className="home-our-trek-container">
    <div data-bg={"url(/static/media/"+this.props.track_media.track_image+")"} className="home-our-trek-banner section-bg section-bg-img-url rocket-lazyload" style={{backgroundImage : "url(/static/media/"+this.props.track_media.track_image+")"}} data-was-processed="true"></div>
    <div className="home-our-trek-content">
    <h3 className="home-trek-title more_track_card" style={{textTransform:"capitalize"}}>{this.props.track.track_name}</h3>
    <div className="trek-info-wrapper">
    <div className="trek-info-row">
    <div className="trek-info-col altitude-icon" title={this.props.track.track_altitude}>{this.props.track.track_altitude}</div>
    <div className="trek-info-col duration-icon" title="6 days">{this.props.track.track_duration} days</div>
    </div>
    </div>
    <div className="btn btn-yellow btnsm home-our-trek-btn">View details</div>
    </div>
    <div className="home-trek-box-badge">{this.props.track.track_difficulty}</div>
    </div>
    </a>
    </div>
      
      // <div className="portfolio-wrap">
      //       <figure className="img_figure">
      //         <LazyLoadImage
      //         className="img-fluid"
      //         alt={""}
      //         height="100%"
      //         width="100%"
      //         effect="blur"
      //         src={"/static/media/"+this.props.track_media.track_image} />
      //         <a href={"/static/media/"+this.props.track_media.track_image} data-lightbox="portfolio" data-title="App 1" className="link-preview"><i className="ion ion-eye"></i></a>
      //         <a href={"/track_detail/"+this.props.track.track_name} className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
      //       </figure>
    
      //       <div className="portfolio-info">
      //         <h4><a href="" style={{textTransform:'capitalize'}}>{this.props.track.track_name}</a></h4>
      //         <Container style={{marginTop:'.5rem'}}>
      //                         <Row className="track_row">
      //                           <Col className="col_pad_track"><p className='card_text'><i className="fas fa-mountain"></i>&nbsp;&nbsp;{this.props.track.track_altitude} ft</p></Col>
      //                           <Col className="col_pad_track"><p className='card_text'><i className="fas fa-calendar-day"></i>&nbsp;&nbsp;{this.props.track.track_duration} Days</p></Col>
      //                         </Row>
      //         </Container>
      //       </div>
      //       <div className="TC_badge">
      //         {this.props.track.track_difficulty}
      //         </div>
      //   </div>
    
        );
}
  
}

export default Track_image_cards_template;
