import React, { Component } from "react";
import axios from 'axios';
import './event_article.css';
import { Jumbotron, Container, Button,Tabs, Tab, Accordion,Card,Row,Col,Modal,Image} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{color:'white'}}
    >
      <Modal.Header closeButton className="modal_cross_sign_white" style={{background:'black'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem',textTransform:'capitalize'}}>
          {props.data['subject']}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub1']}
        </p>
        <Image src={"/static/media/"+props.data['img1']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des1']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub2']}
        </p>
        <Image src={"/static/media/"+props.data['img2']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des2']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub3']}
        </p>
        <Image src={"/static/media/"+props.data['img3']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des3']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub4']}
        </p>
        <Image src={"/static/media/"+props.data['img4']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des4']}
        </p>
        <br/><br/>
      </Modal.Body>  
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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


class Event_article extends React.Component {

constructor(props) {
  super(props);
  this.state={
	          loading:true,
              modal_data:{},
              modalShow: false,
              data: {},
              event: {},
              blog: {},
              info: {},
              article: {},
              other: {},
              flag:'',  //decides which to expand on click,, its, values are.....event,blog etc
              }
              this.handle_expand = this.handle_expand.bind(this);
}
handle_expand(name)
{
 this.setState({flag:name})
}
componentDidMount()
{
	let event=[]
        let blog=[]
        let info=[]
        let article=[]
        let other=[]
axios.get('/view_event_article_ALL/')
      .then(res => {
        for(let x=0;x<res.data.event_data.length;x++)
            {
              if(res.data.event_data[x]['type']=='Event')
              {
                event.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Blog')
              {
                blog.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Info')
              {
                info.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Article')
              {
                article.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Other')
              {
                other.push(res.data.event_data[x])
              }
            }
        this.setState({
			           loading:false,
                       data: res.data.event_data,
                       event: event,
                       blog: blog,
                       info: info,
                       article:article,
                       other:other

        })
      })
}


    render() {

let items=['event','blog','info','article','other']
let event_items=[[],[],[],[],[]]
for(let i=0;i<items.length;i++)
{
let name=items[i]
  for(let x=0;x<this.state[name].length;x++)
        {
        if(x>3)
        {
           if(this.state.flag!=name)
           {
           event_items[i].push(<div className='m-left-30' style={{textAlign:'center',marginTop:'50px'}}><Button className='ev_button' onClick={()=>this.handle_expand(name)}>View All</Button></div>)
           break;
           }
        }
        let variant = this.state[name][x];
        event_items[i].push(         
      <div className="col-lg-4 col-md-4 testimonials-item" style={{marginBottom: "30px"}} onClick={()=>{this.setState({modal_data:variant, modalShow:true})}}>
        <div className="carousel-item-c">
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img src={"/static/media/"+this.state[name][x]['img1']} alt="" className="img-b img-fluid" style={{height:'150px'}}/>
                  </div>
                  
                    <div className="card-header-b">
                      <div className="card-title-b">
                        <h4 className="title-2">
                          <a>{this.state[name][x]['subject']}</a>
                        </h4>
                      </div>
                      {/* <div className="card-date">
                        <span className="date-b">18 Sep. 2020</span>
                      </div> */}
                    </div>
                  
                </div>
              </div>
    </div>

        )
        }

}

let src = "/static/media/home_images/";
                 //let images = ["3.jpg","28.jpg","6.jpg","7.jpg","10.jpg","13.jpg","15.jpg","16.jpg","18.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
                 let images = ["3.jpg"];
                 let elements = images.map((element,i,arr) => {
                   let style_obj ={
                     backgroundImage : "url("+src+element+")"
                   }
                   let cls = i==0?"carousel-item active":"carousel-item";
                   return <div className={cls} style={style_obj}>
                             <div className="carousel-container">
                               <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Event / Article</h2>
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });

    return (

<div>
<section id="intro" className="height_450px">
                     <div className="intro-container">
                       <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                 
                         <ol className="carousel-indicators"></ol>
                 
                         <div className="carousel-inner" role="listbox">            
                          {elements}
                         </div>
                 
                         {/* <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                         </a>
                 
                         <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                         </a> */}
                 
                       </div>
                     </div>
                   </section>

    <Tabs defaultActiveKey={"EVENTS"} id="uncontrolled-tab-example"  >				   
    <Tab eventKey="EVENTS" title="EVENTS">							
        <Container className="blog_tab_container" >
        {/* <h2 className='event_heading'>EVENTS</h2> */}
        <Row className='row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog'>
            {this.state.loading?<div><br/><br/><Loading/></div>:event_items[0]}
          </Row>
        </Container>
		</Tab>
    <Tab eventKey="BLOGS" title="BLOGS">							
        <Container className="blog_tab_container">
        {/* <h2 className='event_heading'>BLOGS</h2> */}
        <Row className='row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog'>
            {this.state.loading?<div><br/><br/><Loading/></div>:event_items[1]}
          </Row>
        </Container>
		</Tab>
    <Tab eventKey="INFO" title="INFO">							
        <Container  className="blog_tab_container" >
        {/* <h2 className='event_heading'>INFO</h2> */}
        <Row className='row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog'>
            {this.state.loading?<div><br/><br/><Loading/></div>:event_items[2]}
          </Row>
        </Container>
		</Tab>
    <Tab eventKey="ARTICLES" title="ARTICLES">							
        <Container  className="blog_tab_container" >
        {/* <h2 className='event_heading'>ARTICLES</h2> */}
        <Row className='row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog'>
            {this.state.loading?<div><br/><br/><Loading/></div>:event_items[3]}
          </Row>
        </Container>
		</Tab>
    <Tab eventKey="OTHERS" title="OTHERS">							
        <Container  className="blog_tab_container" >
        {/* <h2 className='event_heading'>OTHERS</h2> */}
        <Row className='row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog'>
            {this.state.loading?<div><br/><br/><Loading/></div>:event_items[4]}
          </Row>
        </Container>
		</Tab>

		</Tabs>
			   
    


    <MyVerticallyCenteredModal
        show={this.state.modalShow}
        data={this.state.modal_data}
        onHide={() => this.setState({modalShow:false})}
      />

</div>
        );
  }
}



export default Event_article;