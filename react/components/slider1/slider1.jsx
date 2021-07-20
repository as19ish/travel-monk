import React, { Component,Suspense } from "react";
import { Link} from 'react-router-dom'
import axios from 'axios';
import './slider1.css';
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

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount(){

    axios.get('/delete_slider_image/',)
              .then(res => {                
                this.setState({data: res.data.result});
              })
  }

render(){

    // let src = "/static/media/home_images/";
  // let images = ["3.jpg","28.jpg","6.jpg","7.jpg","10.jpg","13.jpg","15.jpg","16.jpg","18.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
  let data = [];
  let images = [];
  let src = "/static/media/";
  
  this.state.data.forEach(element => {
    images.push(element['image']);
  });

  let elements = images.map((element,i,arr) => {
    let style_obj ={
      backgroundImage : "url("+src+element+")"
    }
    let cls = i==0?"carousel-item active":"carousel-item";
    return <div className={cls} style={style_obj}>
              <div className="carousel-container">
                <div className="container">
  <h2 className="animate__animated animate__fadeInDown">{this.state.data[i]['title']}</h2>
                  <p className="animate__animated animate__fadeInUp">{this.state.data[i]['detail']}</p>
                  <a href="#portfolio" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                </div>
              </div>
          </div>
    
  });
  return (
<React.Fragment>
    <section id="intro">
      <div className="intro-container">
        <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
  
          <ol className="carousel-indicators"></ol>
  
          <div className="carousel-inner" role="listbox">            
           {elements}
          </div>
  
          <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
  
          <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
  
        </div>
      </div>
    </section>
    
    
  </React.Fragment>
  );

}

}

export default ControlledCarousel;
