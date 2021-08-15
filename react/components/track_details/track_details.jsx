import { useHistory } from "react-router-dom";
import React, { Component } from "react";
// import './track_details.css';
import $ from 'jquery';
import {Card,Jumbotron,Container,ListGroup,Image,Carousel,img} from 'react-bootstrap';
import { Route,Redirect,Link} from 'react-router-dom'
import {Alert, Tabs, Tab,Row,Col,Table,tr,td } from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Related_story from '../related_story/related_story'
import Related_reviews from '../related_review/related_review'
import Related_events from '../related_event/related_event'

class track_details extends Component {
componentDidMount()
{
document.getElementById('call_back_fixed_button_id').style.display='none'
}

shouldComponentUpdate ()
{
	
	return false;
}
    render() { 
    console.log('inside track details render',this.props);
    
    if(Object.keys(this.props.location.state).length==0)
        {
        
            return(<div style={{textAlign:'center'}}><h4 style={{color:'red'}}>No Data Available For This Trekking ....</h4>
            <Link to="/home"><button type="button">Go home</button></Link></div>
            )
        }
     else
     {
 
     let list1=this.props.location.state.dayPlanid_day_description_list;
     let list2=this.props.location.state.dayPlanid_subDaySequence_description_list;
     let image_array=this.props.location.state.media;
     let other_details=this.props.location.state.other_details


    let i=1
    let list_item_day=list1.map(function(x){
                    i=i+1
                    return <li>
                                <div className={i%2==0?'direction-r':'direction-l'}>
                                      <div className="flag-wrapper">
                                        <span className="flag">Day {x[1]}</span>
                                        <span className="time-wrapper"></span>
                                      </div>
                                      <div className="desc" style={{whiteSpace:'pre-line'}}>{x[2]}</div>
                                    </div>
                        </li>
                })

    let list_item_sub_day=[]
        i=0
         
          list_item_sub_day=list2.map(function(x){

          if(x.length==0)
          {
            return(null)
          }
          else
          {
               i=i+1
                    return (<li>
                                <div className={i%2!=0?'direction-r':'direction-l'}>
                                      <div className="flag-wrapper">
                                        <span className="flag">Day {i}</span>
                                        <span className="time-wrapper"></span>
                                      </div>
                                      <div className="desc">

                                           {true? x.map(function(a){return(<p style={{whiteSpace:'pre-line'}}><i className="fa fa-fighter-jet"></i>&nbsp;{a[2]}</p>)}):null}

                                            </div>

                                    </div>
                        </li>)
          }
                })

           let images=[]
            
          for(let i=0;i<image_array.length;i++)
          {
          
            images.push(
               <Carousel.Item className='main_carous effect5'>
                <img
                  className="d-block w-100 height_450px"
                  src={"/static/media/"+image_array[i]['track_image']}
                  alt="First slide"
                />
                <Carousel.Caption style={{top:'0',bottom:'auto',left:'0',right:'0',backgroundColor:'rgba(0, 0, 0, 0.5)',}}>
                  <h4 style={{textTransform:'uppercase'}}>{other_details[0]['track_name']}</h4>
                </Carousel.Caption>
              </Carousel.Item>
           )
          }
let gallery_images=[]
          for(let i=0;i<image_array.length;i++) 
          {
              gallery_images.push(<Card className='gallery_image_card'>
  <Card.Img variant="top" src={"/static/media/"+image_array[i]['track_image']} className='gallery_image'/>
</Card>)
          }


         return ( 

        <Container fluid className="custom_track_details_Container">
            {image_array.length==0?null:<div className='carousel_container1'><Carousel interval={null} className='main_carous effect5'>{images}</Carousel></div>}
             
			 <Container fluid>
			 <Row style={{padding:'20px'}}>
                <Col lg={8} sm={12} md={12} xl={8} className="custom_column_track_detail">
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="uncontrolled-tab-example" >

                    <Tab eventKey="about" title="About Trek" >
                            <Row style={{paddingTop:'20px'}}>
                       <Col lg={12} sm={12} md={12} xl={12} style={{background:'none'}}>

                      <Alert>
                      <legend style={{textAlign:'center', textTransform:'uppercase'}}><b>{other_details[0].track_name}</b></legend>
                            <p style={{fontSize:'18px',fontWeight:'500',whiteSpace:'pre-line'}}>{other_details[0].track_description}</p>
                      </Alert>

                       </Col>
                       </Row>
                      </Tab>


                    <Tab eventKey="info" title="Basic Details" className='custom_column_track_detail1'>
                         <Jumbotron style={{textAlign:'center',paddingLeft:'10%',paddingRight:'10%',fontSize:'18px',fontWeight:'500'}} className='custom_column_track_detail1'>
                           <Table responsive className='custom_column_track_detail1'>
                                  <tbody> 
                                   <tr>
                                      <th className='align_left'>Trek Name</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_name']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Duration</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_duration']} Days</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Altitude</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_altitude']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Difficulty</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_difficulty']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Length</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_length']} km</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Best Season</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_best_season']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Start Point</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_start_point']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>End Point</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_end_point']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Nearest Railway</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_railway']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Nearest Airport</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_airport']}</td>
                                    </tr>
                                    <tr>

                                      <th className='align_left'>Road Route</th>
                                      <td className='capitalize align_left'>{other_details[0]['track_road']}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                </Jumbotron>
                          </Tab>




                          <Tab eventKey="home" title="Short Itinerary" style={{fontSize:'18px',fontWeight:'500'}}>
                              <div>
                                <ul className="timeline">
                                  {list_item_day}
                                </ul>
                              </div>
                          </Tab>
                          <Tab eventKey="profile" title="Tour Plan" style={{fontSize:'18px',fontWeight:'500'}}>
                                <div>
                                <ul className="timeline">
                                  {list_item_sub_day}
                                </ul>
                              </div>
                          </Tab>

                                                    <Tab eventKey="contact" title="Cost" style={{fontSize:'18px',fontWeight:'500'}} className='custom_column_track_detail1'>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Container className='custom_column_track_detail1'>

                            <Row>
                                <Col><b>Cost Per Person :</b></Col>
                                <Col>{this.props.location.state.other_details[0].track_cost} Rs.</Col>
                              </Row>
							  <br/>
                                 <br/>
                              <Row>
                                <Col><b>Cost Customization :</b></Col>
                                <Col><p style={{textTransform:'capitalize',fontSize:'18px',whiteSpace:'pre-line'}}>{this.props.location.state.other_details[0].track_cost_cusomization}</p></Col>
                              </Row>

                            </Container>
                            </Jumbotron>
                          </Tab>

                           <Tab eventKey="activity" title="Activities" style={{fontSize:'18px',fontWeight:'500'}} className='custom_column_track_detail1'>
                           <Jumbotron style={{textAlign:'center'}} className='custom_column_track_detail1'>
                            <ListGroup>
                              <ListGroup.Item action className='custom_column_track_detail1'>Snow Camping</ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Meadows Camping
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Jungle Camping
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                River Side Camping
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Night Trekking
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Village Tourism
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Yoga
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Round Fire
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Small Camping Party
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Music In Peaceful Place
                              </ListGroup.Item>
                              <ListGroup.Item action className='custom_column_track_detail1'>
                                Some Other Adventure Activities
                              </ListGroup.Item>
                            </ListGroup>
                        </Jumbotron>
                        </Tab>
						
												
						<Tab eventKey="releted_story" title="Trekker Stories" style={{fontSize:'18px',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_story id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>
						
						
					      <Tab eventKey="gallery" title="Gallery" style={{fontSize:'18px',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            {gallery_images}
                            </Jumbotron>
                          </Tab>
						  
						  <Tab eventKey="Other" title="Articles" style={{fontSize:'18px',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_events id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>
						  
						  <Tab eventKey="releted_review" title="Reviews" style={{fontSize:'18px',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_reviews id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>


                       </Tabs>
                </Col>
                <Col lg={4} sm={12} md={12} xl={4}>


            <Jumbotron id="_fix">
                <Container className='track_detail_form_container mt-20'>
                          <Form_component data={this.props.location.state}/>
                  </Container>
            </Jumbotron>

                </Col>
              </Row>
</Container>
            </Container>
  );
     }

  }
}

export default track_details;
