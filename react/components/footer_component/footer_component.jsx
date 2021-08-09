import React, { Component } from "react";
import './footer.css';
import {Link} from 'react-router-dom';
import {Container,Row, Col, Modal,Image} from 'react-bootstrap';
import Social_media_section from "../social_media_section/social_media_section";
import Logo from '../../../tourism_project/static/assets/img/h2h-logo.png';

function MyVerticallyCenteredModal(props) {

let set=props.img_set1.length==0?props.img_set2:props.img_set1;
let data=[]
for(let i=0; i<set.length;i++)
		    {
		      data.push(<div><Image src={props.base_path+set[i]} thumbnail /><br/><br/></div>)
		    }

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
         ABOUT US
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{textAlign:'center'}}>
      <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
        </p>
		<br/>
		{data}
      </Modal.Body>
    </Modal>
  );
}

class Footer extends Component {

constructor(props) {
    super(props);
    this.state = {
    flag:false,
    base_path:'/static/media/footer_pics/',
    img_set1:[],
    img_set2:[]
  }
}
    render() {

let img_set1=['img1.jpg','img2.jpg'];
let img_set2=['img11.jpg','img10.jpg','img5.jpg','img7.jpg','img8.jpg','img6.jpg','img9.jpg','img3.jpg','img4.jpg']
    return (
    <div>

<footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 footer-info">
          <div className="f-logo"><Link to="/"><img style={{maxHeight:'50px'}} src={Logo} alt="hike2heaven" /></Link></div>
            <p className="mt-20">Traveling  means live the unlived moment and the path to know ourself  in a better way.We Hike2Heaven provide you everlasting feeling of trekking and traveling
Meet As UNKNOWN And Leave As WELL-KNOWN. Give a Chance to Us for Exploring the Place in A Different Manner. You are most Welcome as Couple as well As Groups.
</p>

<div className="footer-contact mt-30">
            <h4>Contact Us</h4>
            <p>
              Dehradun,<br/>
              India<br/>
              <strong>Phone:</strong> +917409903776<br/>
              <strong>Phone:</strong> 9756245146<br/>
              <strong>Email:</strong> info@hike2heaven.com<br/>
            </p>

          </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="ion-ios-arrow-right"></i> <a href="/">Home</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="/trekker_story_form/">Submit treker story</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="/review_form/">Submit review</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="/event_article/">Event & Article</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="/all_trekker_stories/">Trekker stories</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="/about_us">About us</a></li>
            </ul>
            <div className="mt-30">
              <Social_media_section />
            </div>
          </div>

          

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Hike2Heaven</strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://company.
  noobtodev.com" target="_blank"><span>NoobtoDev</span></a>
      </div>
    </div>
    {/* <div id="preloader"></div> */}
  <a className="back-to-top"><i className="icofont-simple-up"></i></a>
  </footer>


<MyVerticallyCenteredModal
        show={this.state.flag}
        base_path={this.state.base_path}
        img_set1={this.state.img_set1}
        img_set2={this.state.img_set2}
        onHide={() => this.setState({flag:false,img_set1:[],img_set2:[]})}
      />


    </div>
        );
  }
}

export default Footer;
