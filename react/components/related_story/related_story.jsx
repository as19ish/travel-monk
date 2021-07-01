import React, { Component } from "react";
import axios from 'axios';
import './related_story.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Stories_component extends React.Component {
render() {
let data_array=this.props.stories
    return (

          <Card className="all_blogs_card" style={{background:'none',border:'none'}}>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.index} style={{background:'none',border:'none'}}>
              <Container style={{boxShadow:'rgb(200, 200, 200) 1px 1px 10px',border:'none'}}>
                   <Row style={{fontWeight:'bold'}}>
                    <Col><Image roundedCircle variant="top" src={"/static/media/"+data_array.profile_photo} style={{height:'70px',width:'70px'}}/></Col>
                    <Col className='review_text'>{data_array.name}</Col>
                    <Col className='review_text'>{data_array.trek_name}</Col>
                    <Col>
                    <div style={{height:'20px',width:'20px'}}>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>  
                        </div>
                    </Col>


                  </Row>
                </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.index}>
              <Card.Body style={{padding:0}}>

                    <Container className='all_blogs_container'>
                       <Row>
                       <Col xs={12} sm={12} md={12} lg={12} style={{textAlign:'center',fontStyle:'oblique',fontWeight:'lighter',fontVariant: 'all-petite-caps',color:'rgba(0,0,0,.9)'}}>
                         <Image variant="top" src={"/static/media/"+data_array.trek_photo} style={{height:'300px',width:'300px'}}/>
                         </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                         <p className='review_text' style={{textTransform:'none',whiteSpace:'pre-line',fontSize:'1rem',fontWeight:'500',color:'rgba(0,0,0,.9)',textAlign:'left'}}>{"'"+data_array.description+"'"}</p>
                         </Col>
                       </Row> 
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
          </Card>

        );
  }
}

class Related_trekker_story extends React.Component {

constructor(props) {
                      super(props);
                      this.state = {stories:[],
                                      };
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'
axios.get('http://localhost:8000/view_related_trekker_story/', {params: {id:this.props.id}})
      .then(res => {
        this.setState(res.data)
      })
}


    render() {
let stories_length=Object.keys(this.state.stories).length 
let items=[]
for(let i=0;i<stories_length;i++ )
                 {
                   items.push(<Stories_component stories={this.state.stories[i]} index={i}/>)
                 }
    return (
    <div>
          <div>
                <h2 className="all_blogs_heading">Trekker's Stories For <span style={{color:'#ffc107'}}>{this.props.name}</span></h2>
          </div>
             <Jumbotron style={{background:'none'}}> 
             <Accordion defaultActiveKey="0" style={{background:'none'}}>
                {this.state.stories.length==0?<h6>No Trekker Story Available For This Trek. Click <Link to="/all_trekker_stories" style={{textDecoration:'underline',color:'blue'}}>
                         Trekker Stories
                        </Link> For Other Trekker Stories.</h6>:<div>{items}<br/><br/><h6>Click <Link to="/all_trekker_stories" style={{textDecoration:'underline',color:'blue'}}>
                         Trekker Stories
                        </Link> For Other Trekker Stories.</h6></div>}
             </Accordion>
             </Jumbotron>
    </div>
        );
  }
}



export default Related_trekker_story;