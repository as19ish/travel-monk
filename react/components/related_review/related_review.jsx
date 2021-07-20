import React, { Component } from "react";
import axios from 'axios';
import './related_review.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Review_component extends React.Component {
render() {
let data_array=this.props.reviews
let stars=[]
for(let i=0;i<parseInt(data_array.star);i++)
{
stars.push(<i class="fa fa-star fa-1x star_width_half_rem" aria-hidden="true" style={{color:'#FFCC03'}}></i>)
}
    return (

          <Card className="all_blogs_card" style={{background:'none',border:'none'}}>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.index} style={{background:'none',border:'none'}}>
              <Container style={{boxShadow:'rgb(200, 200, 200) 1px 1px 10px',border:'none'}}>
                   <Row style={{fontWeight:'bold'}}>
                    <Col><Image roundedCircle variant="top" src={"/static/media/"+data_array.photo} className='img_all_review'/></Col>
                    <Col className='review_text'>{data_array.name}</Col>
                    <Col className='review_text'>{data_array.trek_name}</Col>
                    <Col className='review_text'>{stars}</Col> 
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
                        <Col>
                         <p className='review_text'style={{textTransform:'none',whiteSpace:'pre-line',fontSize:'1rem',fontWeight:'500',color:'rgba(0,0,0,.9)',textAlign:'left'}}>{"'"+data_array.description+"'"}</p>
                         </Col>
                       </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
          </Card>

        );
  }
}

class all_blogs_component extends React.Component {

constructor(props) {
                      super(props);
                      this.state = {reviews:[],
                                      };
}
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='block'
axios.get('/view_related_reviews/',{params: {id:this.props.id}})
      .then(res => {
        this.setState(res.data)
      })
}


    render() {


let review_length=Object.keys(this.state.reviews).length
let items=[]
for(let i=0;i<review_length;i++ )
                 {
                    items.push(<Review_component reviews={this.state.reviews[i]} index={i}/>)
                 }
    return (
    <div>
          <div>
                <h2 className="all_blogs_heading">Reviews For <span style={{color:'#ffc107'}}>{this.props.name}</span></h2>
          </div>
             <Jumbotron style={{background:'none'}}>
             <Accordion defaultActiveKey="0" style={{background:'none'}}>
               {this.state.reviews.length==0?<h6>No Reviews Available For This Trek. Click <Link to="/all_reviews" style={{textDecoration:'underline',color:'blue'}}>
                         Reviews
                        </Link> For Other Reviews.</h6>:<div>{items}<br/><br/> <h6>Click <Link to="/all_reviews" style={{textDecoration:'underline',color:'blue'}}>
                         Reviews
                        </Link> For Other Reviews.</h6></div>}
             </Accordion>
             </Jumbotron>
    </div>
        );
  }
}



export default all_blogs_component;