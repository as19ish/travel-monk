import React, { Component, Suspense } from "react";
import './social_media_section.css';
import $ from 'jquery';
import axios from 'axios'

//main component....................


class Social_media_section extends Component {

constructor(props) {
  super(props);
  }
    render() {

    return (
	 
	<div className="s-media">
				<div className="rounded-social-buttons">
					<a className="social-button phone" href="tel:+919756245146" target="_blank"><i className="fas fa-phone"></i></a>
					<a className="social-button whatsapp" href="https://wa.me/919756245146" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a className="social-button facebook" href="https://www.facebook.com/MountainsRover" target="_blank"><i className="fab fa-facebook-f"></i></a>                   
                    <a className="social-button youtube" href="https://www.youtube.com/channel/UCG2tWfHoU2f7ED7ks4M8Cvw" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/mountainsrover/" target="_blank"><i className="fab fa-instagram"></i></a>
                    
               
				</div>
	</div>
          
        );
  }
}
export default Social_media_section;
