import React, { Component } from "react";
import axios from 'axios';
import './related_event.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Modal,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
axios.get('/view_related_event_article_ALL/',{params: {id:this.props.id}})
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
           event_items[i].push(<div style={{textAlign:'center',marginTop:'50px'}}><Button className='ev_button' onClick={()=>this.handle_expand(name)}>View All</Button></div>)
           break;
           }
        }
        event_items[i].push(
        <Col className='on_small_padding_0'>
                   <ul>
                      <li style={{cursor:'pointer', marginBottom:'20px'}} onClick={() => {this.setState({modalShow:true,modal_data:this.state[name][x]})}}>
                        <a>
                          <div className="team-img"> 
                            <div className="front">
                              <img src={"/static/media/"+this.state[name][x]['img1']} alt=''/>
                            </div>
                            <div className="back">
                              <img src={"/static/media/"+this.state[name][x]['img2']} alt=""/> 
                            </div>
                          </div> 
                        </a>
                      </li>
                    </ul>
					<h3 onClick={() => {this.setState({modalShow:true,modal_data:this.state[name][x]})}} style={{cursor:'pointer',fontSize:'1rem', textAlign:'center',textTransform:'capitalize',fontWeight:'500'}}>{this.state[name][x]['subject']}</h3>
                </Col>

        )
        }

}


    return (

<div>

<h2 className="all_blogs_heading">Related Items For <span style={{color:'#ffc107'}}>{this.props.name}</span></h2>
   
{Object.keys(this.state.data).length==0?<h6>No Related Data Available For This Trek. Click <Link to="/event_article" style={{textDecoration:'underline',color:'blue'}}>
                         Events+Article+Blogs+Info
                        </Link> For More.</h6>:<div><div>
	
	{Object.keys(this.state.event).length==0?null:
	<Container style={{marginTop:'10px'}}>
    <i className="fa fa-handshake-o" aria-hidden="true"></i>
    <h2 className='event_heading'>EVENTS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {this.state.loading?<div><br/><br/><h4 style={{textAlign:'center'}}>loading....</h4></div>:event_items[0]}
      </Row>
    </Container>
    }
	<br/>
	
	{Object.keys(this.state.blog).length==0?null:	
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>BLOGS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {this.state.loading?<div><br/><br/><h4 style={{textAlign:'center'}}>loading....</h4></div>:event_items[1]}
      </Row>
    </Container>
	}
    <br/>
	{Object.keys(this.state.info).length==0?null:
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>INFO</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {this.state.loading?<div><br/><br/><h4 style={{textAlign:'center'}}>loading....</h4></div>:event_items[2]}
      </Row>
    </Container>
	}
    <br/>
	{Object.keys(this.state.article).length==0?null:
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>ARTICLES</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {this.state.loading?<div><br/><br/><h4 style={{textAlign:'center'}}>loading....</h4></div>:event_items[3]}
      </Row>
    </Container>
	}
    <br/>
	{Object.keys(this.state.other).length==0?null:
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>OTHERS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {this.state.loading?<div><br/><br/><h4 style={{textAlign:'center'}}>loading....</h4></div>:event_items[4]}
      </Row>
    </Container> 	
	
	}
	</div>
	<div>
	<br/><br/>
	<h6>Click <Link to="/event_article" style={{textDecoration:'underline',color:'blue'}}>
                         Events+Article+Blogs+Info
                        </Link> For More.</h6>
						</div>
						</div>
}

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