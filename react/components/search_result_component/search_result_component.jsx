import React, { Component } from "react";
import axios from 'axios';
import './search_result_component.css';
import Track_image_cards_template from '../track_image_cards/track_image_cards_template';
import { Jumbotron, Container, Button} from 'react-bootstrap';
class search_result_component extends Component {


constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state={track: {},track_media:{}}
//  this.handleOptionChange = this.handleOptionChange.bind(this);
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'
}
    render() {


let track_length=this.props.location.state.track.length

let items=[]
for(let i=0;i<track_length;i++ )
                 {
                   items.push(<div className={"col-lg-3 col-md-3 portfolio-item "+this.props.location.state.track[i].track_difficulty.toLowerCase()}><div style={{marginBottom:"15px"}}><Track_image_cards_template track={this.props.location.state.track[i]} track_media={this.props.location.state.track_media[i]}/></div></div>)
                 }
    return (
    <div>
          <div className="search_result_heading">
                <p><i className="fa fa-search" aria-hidden="true"></i> Search Results for  <h3 style={{display:'inline'}}>{"'"+this.props.location.state.search_key+"'"}</h3></p>
                <h4 style={{fontFamily: 'fantasy'}}>Tracks Found : {track_length}</h4>
            </div>
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">      
      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        {items}
      </div>
      </div>
  </section>
    </div>
        );
  }
}

export default search_result_component;
