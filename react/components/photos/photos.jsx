import React, {Component,Suspense} from 'react';
import './photos.css'
import {Container, Row,Col,Image,Tabs, Tab,Card,Modal,Button} from 'react-bootstrap';
import axios from 'axios';

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
class Tab2 extends React.Component {
	constructor(props)
		{
			super(props)
			this.state={}					
		}
	
  render() { 
   let pre='/static/media/photos/'
	  let path=[pre+'1/',pre+'2/',pre+'3/',pre+'4/',pre+'5/',pre+'6/']
  let height = '300';
  let width = '100%';
  let tab_data=[]
  let keys=Object.keys(this.props)
  let def=Object.keys(this.props)[0]
  for (let x=0; x<keys.length; x++)
  {
	  	  tab_data.push(
				  <Tab eventKey={keys[x]} title={keys[x]}>							
										<Row style={{padding:'2%'}}>
										
										{
											this.props[keys[x]].map((data,index)=>
											
											<Col style={{textAlign:'center'}} xs={12} sm={12} md={4} lg={4} xl={4} >
											<Image style={{height:'200px',width:'100%'}} src={data[0]==''?pre+'coming_soon.jpg':path[x]+data[0]} thumbnail />
											 <br/>
											 <br/> 
											 <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>{data[1]}</h4>
											 <p className="text-muted "><br/>{data[2]}<br/><br/></p>
											</Col>
											
											)
										}										
											
										  </Row>
							  </Tab>

				  )
		  
  }
  
  return <Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%',borderTop:'0px'}}>
			 <Row>
                <Col lg={12} sm={12} md={12} xl={12} className="himalaya_tab">
                   <Tabs defaultActiveKey={def} id="uncontrolled-tab-example"  >				   
				   {tab_data}
					</Tabs>
                </Col>
              </Row>
		</Container>
  }
  
}


class Photos extends React.Component {
  render() {
	  
	 
	  
	  let data ={'Latest photos':[
								   ['','',''],
								   ['','',''],
								   ['','','']
								  ],
	              'Hike2Heaven photos':[
								   ['m1.jpg','Nandikund trek ','nandikund lake is situated at the height of 4700Mt this trek is offering great view of chaukhamba peak and nanikund ,panpatiya ,peak '],
								   ['m2.jpg','Roopkund trek ','Roopkund trek is situated at the height of 5000Mt above sea level '],
								   ['m3.jpg','Chandarshila','chandarshila temple is situated at the ht of 4000Mt above sea level And located in rudraprayag district of uttrakhand '],
									['m4.jpg','Homkund','Altitude - 5000Mt loacation. Chamoli '],
									['m5.jpg','Everest base region ','Altitude - 4700mt'],
									['m6.jpg','Roopkund ','Altitude - 5000mt'],
									['m7.jpg','Roopkund','Altitud - 5000mt'],
									['m8.jpg','hemkund','Altitude -4500mt'],
									['m9.jpg','Rudarnath','Altitude - 3700mt'],
									['m10.jpg','Rudarnath','Altitude-3700mt'],
									['m11.jpg','Kedarnath','Altitude - 3700mt'],
									['m12.jpg','Bedni ','Altitude - 4000mt'],
								  ['m13.jpg','Bedni','Altitude - 4000mt'],
								  ['m14.jpg','Evrest base region ','Altitude - 4800mt'],
								  ['m15.jpg','Namche bazaar','Altitude 3450mt'],
								  ['m15.jpg','Namche bazaar','Altitude 3450mt'],
								  ['m16.jpg','Iceland peak base','Altitude 4350mt'],
									['m17.jpg','Panpatia col','Altitude 5450mt']
								  ],
								  
				  'Snow trek photos':[
									['s0.jpg','Panwalikantha  trek' ,'Altitude - 4800Mt'],
								    ['s1.jpg','Nandikund trek' ,'Altitude - 4800Mt'],
									['s2.jpg','Roopkund trek','Altitude - 5000Mt'],
									['s3.jpg','Panwalikantha trek'  ,'Altitude - 4300Mt'],
									['s4.jpg','Brahama lake & bekal lake'  ,'Altitude - 3800Mt'],
									['s5.jpg','Bekal lake trek' ,'Altitude - 3100Mt'],
									['s6.jpg','Brahama tal & beakal lake' ,'Altitude -3400Mt'],
									['s7.jpg','kanol Velly  trek' ,'Altitude - 3200Mt'],
									['s8.jpg','kush Kalyan bugiyal' ,'Altitude - 4000Mt'],
									 ['s9.jpg','Roopkund Ronti pass trek' ,'Altitude - 4800Mt'],
									['s10.jpg','Giya vinayak trek' ,'Altitude - 4800Mt'],
									['s11.jpg','Bedni roopkund trek' ,'Altitude - 4800Mt'],         
									['s12.jpg','Nandikund trek' ,'Altitude - 4800Mt'],

								  ],
								  
				  'Our activities':[
								    ['a1.jpg','Chopta tungnath trek' ,'Altitude - 3800Mt'],
									['a2.jpg','Ronti cross trek' ,'Altitude - 525300Mt'],
									['a3.jpg','kanol velly trek' ,'Altitude - 2800Mt'],
									['a4.jpg','Homkund trek' ,'Altitude - 5000Mt'],
									['a5.jpg','Nandiagunti base trek' ,'Altitude - 4800Mt'],
									['a6.jpg','Chopta Tungnath trek' ,'Altitude - 3800Mt'],
									['a7.jpg','Panwalikantha trek' ,'Altitude - 4300Mt'],
									['a8.jpg','Kanol Velly  trek' ,'Altitude - 2800Mt'],
									['a9.jpg','Kanol village trek' ,'Altitude - 2800Mt'],
								  ],	
								  
                   'Tea houses and beautifull locations':[
								    ['t0.jpg','Urgam velly  trek' ,'Altitude - 2800Mt'],
									['t1.jpg','Garhwal Himalayas Tea house  trek' ,'Altitude - 2900Mt'],
							    	['t2.jpg','Evrest base  trek' ,'Altitude 5200Mt'],
							    	['t3.jpg','Garhwal himalyas tea house trek' ,'Altitude - 2900Mt'],
									['t4.jpg','Kumaun Himalayas tea house trek' ,'Altitude - 3200Mt'],
								  ],
								  
                    'Trekker photos':[
								   ['','',''],
								   ['','',''],
								   ['','','']
								  ],								  
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
                  <h2 className="animate__animated animate__fadeInDown">WELCOME TO <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;Photos Section</span></h2>
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });

			return  <div style={{}}>
							<section id="intro" className="height_450px">
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
								<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
								 <Row>
									<Col style={{textAlign:'center'}}>
									<h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'24px'}}>Photos</h1>  
									</Col>
									</Row>
								</Container>		
								
								<Tab2 {...data}/>
					</div>
			}
}

export default Photos;