import React from "react";
import "./extra1.css";
import { Link} from 'react-router-dom'
import {Container, Row,Col} from 'react-bootstrap';
import CampPic from "../../../tourism_project/static/assets/img/icons/001-camping.png";
import GroupPic from "../../../tourism_project/static/assets/img/icons/002-people.png";
import ForestPic from "../../../tourism_project/static/assets/img/icons/003-forest.png";
import CertifiedPic from "../../../tourism_project/static/assets/img/icons/004-certified.png";
import ShieldPic from "../../../tourism_project/static/assets/img/icons/005-shield.png";
import FoodPic from "../../../tourism_project/static/assets/img/icons/006-food.png";

class Extra1 extends React.Component
{
render()
{
return(

<div className='extra1_container'>
<div className='container'>
  <Row>
    <Col style={{textAlign:'center'}}>
    <h2 style={{textAlign:'center',fontWeight:'bold'}}>Why Book Your Trek With Us?</h2>
    
    </Col>
    </Row>
    <div className='row mt-40'>
    <div className="col-md-4 col-sm-12">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={GroupPic} alt="Smaller Groups" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;Smaller Groups & Quality Services.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={CampPic} alt="" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color  mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;<span>Best Camps & Stay</span>.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={ForestPic} alt="" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;<span>Eco-Friendly Trips</span>.</p>
      </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-4 col-sm-12">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={CertifiedPic} alt="" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;<span>Local & Certified Guides</span>.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={ShieldPic} alt="" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color  mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;<span>No Compromise with Safety</span>.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-12 center">
      <div className="extra1-post center mb-40">
        <div className="extra1-post-img">
          <img src={FoodPic} alt="" />
        </div>
        <p style={{fontSize:"20px"}} className='light-color mt-20'>
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        &nbsp;<span>Best Quality Meals</span>.</p>
      </div>
    </div>
    </div>
   </div>
</div>

)
}
}

export default Extra1;