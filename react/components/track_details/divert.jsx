import { useHistory } from "react-router-dom";
import React, { Component } from "react";
import './track_details.css';
import $ from 'jquery';
import axios from 'axios';
import {Card,Jumbotron,Container,ListGroup,Image,Carousel,img} from 'react-bootstrap';
import { Route,Redirect,Link} from 'react-router-dom'
import {Alert, Tabs, Tab,Row,Col,Table,tr,td } from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Related_story from '../related_story/related_story'
import Related_reviews from '../related_review/related_review'
import Related_events from '../related_event/related_event';
import { withRouter } from "react-router";

class track_details extends Component {
    constructor(props){
        super(props);
                        this.state = {
                            list1 : [],
                            list2 : [],
                            image_array : [],
                            other_details : [],
                            load : true,
                        };
    }
componentDidMount()
{
// document.getElementById('call_back_fixed_button_id').style.display='none'
console.log(this.props.location.pathname);
let path = this.props.location.pathname;
path = path.slice(14,path.length);
console.log(path);
axios.get('http://localhost:8000/direct_track_detail/',{params:{name:path}})
      .then(res => {
        console.log('res = ',res);
        let data = res.data;
        this.setState({
            list1 : data['dayPlanid_day_description_list'],
            list2 : data['dayPlanid_subDaySequence_description_list'],
            image_array : data['media'],
            other_details : data['other_details'],
            load : false
        })

      })
}

shouldComponentUpdate ()
{
	
	return true;
}
    render() { 
    console.log('inside track details render',this.state);    
    if(this.state.other_details.length==0 && this.state.load == false)
        {        
            return(<div style={{textAlign:'center'}}><h4 style={{}}>No Data Available For This Trekking ....</h4>
            <Link to="/home"><button type="button">Go home</button></Link></div>
            )
        }else if(this.state.other_details.length==0 && this.state.load == true){
        
          return(<div className="container_loading">
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
</div>)
        }
    else{

        let list1=this.state.list1;
     let list2=this.state.list2;
     let image_array=this.state.image_array;
     let other_details=this.state.other_details;


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
            let style_obj ={
              backgroundImage :"url("+"/static/media/"+image_array[i]['track_image']+")"
            }
            let cls = i==0?"carousel-item active":"carousel-item";
          
            images.push(<div className={cls} style={style_obj}>
                        <div className="carousel-container">
                          <div className="container">
             <h2 className="animate__animated animate__fadeInDown">WELCOME TO <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;{other_details[0]['track_name'].toUpperCase()}</span></h2>
                            {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                            {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                          </div>
                        </div>
                    </div>
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
            <section id="intro" className="height_450px">
                     <div className="intro-container">
                       <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                 
                         <ol className="carousel-indicators"></ol>
                 
                         <div className="carousel-inner" role="listbox">            
                          {images}
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
             
			 <Container fluid>
			 <Row style={{padding:'20px'}}>
                <Col lg={8} sm={12} md={12} xl={8} className="custom_column_track_detail">
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="uncontrolled-tab-example" >

                    <Tab eventKey="about" title="About Trek" >
                            <Row style={{padding:'20px'}}>
                       <Col lg={12} sm={12} md={12} xl={12} style={{background:'none'}}>

                      <Alert>
                      <legend style={{textAlign:'center', textTransform:'uppercase'}}><b>{other_details[0].track_name}</b></legend>
                            <p style={{fontSize:'1rem',fontWeight:'500',whiteSpace:'pre-line'}}>{other_details[0].track_description}</p>
                      </Alert>

                       </Col>
                       </Row>
                      </Tab>


                    <Tab eventKey="info" title="Basic Details" className='custom_column_track_detail1'>
                         <Jumbotron style={{textAlign:'center',paddingLeft:'10%',paddingRight:'10%',fontSize:'1rem',fontWeight:'500'}} className='custom_column_track_detail1'>
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




                          <Tab eventKey="home" title="Short Itinerary" style={{fontSize:'1rem',fontWeight:'500'}}>
                              <div>
                                <ul className="timeline">
                                  {list_item_day}
                                </ul>
                              </div>
                          </Tab>
                          <Tab eventKey="profile" title="Tour Plan" style={{fontSize:'1rem',fontWeight:'500'}}>
                                <div>
                                <ul className="timeline">
                                  {list_item_sub_day}
                                </ul>
                              </div>
                          </Tab>

                                                    <Tab eventKey="contact" title="Cost" style={{fontSize:'1rem',fontWeight:'500'}} className='custom_column_track_detail1'>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Container className='custom_column_track_detail1'>

                            <Row>
                                <Col><b>Cost Per Person :</b></Col>
                                <Col>{this.state.other_details[0].track_cost} Rs.</Col>
                              </Row>
							  <br/>
                                 <br/>
                              <Row>
                                <Col><b>Cost Customization :</b></Col>
                                <Col><p style={{textTransform:'capitalize',fontSize:'1rem',whiteSpace:'pre-line'}}>{this.state.other_details[0].track_cost_cusomization}</p></Col>
                              </Row>

                            </Container>
                            </Jumbotron>
                          </Tab>

                           <Tab eventKey="activity" title="Activities" style={{fontSize:'1rem',fontWeight:'500'}} className='custom_column_track_detail1'>
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
						
												
						<Tab eventKey="releted_story" title="Trekker Stories" style={{fontSize:'1rem',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_story id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>
						
						
					      <Tab eventKey="gallery" title="Gallery" style={{fontSize:'1rem',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            {gallery_images}
                            </Jumbotron>
                          </Tab>
						  
						  <Tab eventKey="Other" title="Articles" style={{fontSize:'1rem',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_events id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>
						  
						  <Tab eventKey="releted_review" title="Reviews" style={{fontSize:'1rem',fontWeight:'500'}}>
                           <Jumbotron className='custom_column_track_detail1'>
                            <Related_reviews id={other_details[0]['id']} name={other_details[0]['track_name']} />
                            </Jumbotron>
                          </Tab>


                       </Tabs>
                </Col>
                <Col lg={4} sm={12} md={12} xl={4}>


            <Jumbotron id="_fix">
                <Container className='track_detail_form_container'>
                          <Form_component data={this.state}/>
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

export default withRouter(track_details);
