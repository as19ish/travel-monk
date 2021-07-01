import React, { Component } from "react";
import './header_component.css'
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Link} from 'react-router-dom'
import Links from './links/links'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Container,Row,Col,Image } from 'react-bootstrap';
import Search from '../search_component/search'


class HeaderComponent extends Component {
    render() {

    return (

<Container fluid className='s_container'>
                <Row className='s_row'> 
				<Col xs={12} sm={12} md={12} lg={12} className='s_col'>
				<div className='search_hide'>
				 <Search/>  
				 </div>
                    <a href="http://localhost:8000/" style={{textDecoration:'none'}}>					      
						 <Image className='head_image' src="/static/media/fa-home.png" roundedCircle thumbnail />
				    </a>&nbsp;&nbsp;&nbsp;
					 <Link to="/save_himalaya"><Image className='head_image' src="/static/media/fa_himalaya.jpg" roundedCircle thumbnail />
					 </Link>&nbsp;&nbsp;&nbsp;
						
						<Link to="/videos"><Image className='head_image' src="/static/media/fa_video.jpg" roundedCircle thumbnail /> 
						</Link>&nbsp;&nbsp;&nbsp;
						 <Link to="/photos"><Image className='head_image' src="/static/media/fa_image.png" roundedCircle thumbnail /> 
						 </Link>&nbsp;&nbsp;&nbsp;
						 <Link to="/tea_house">
               <Image className='head_image' src="/static/media/tea_house.jpg" roundedCircle thumbnail />
             </Link>
                </Col>				 
				 
				 </Row>
</Container>
        );
  }
}

export default HeaderComponent;
