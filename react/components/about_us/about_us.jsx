import React from 'react';
import './about_us.css'
import { Link} from 'react-router-dom'
import {Container, Row,Col,Image } from 'react-bootstrap';
import Youtube_player from '../youtube/youtube';

class About extends React.Component {
  render() {

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
                  <h2 className="animate__animated animate__fadeInDown">ABOUT <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;US</span></h2>
                  {/* <p className="animate__animated animate__fadeInUp">{this.state.description}</p> */}
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });
	  
	  let videoId = 'KM67Q8c56lc';
let height = '390';
let width = '100%';
			return  <div style={{}}>

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
                         </a>
                  */}
                       </div>
                     </div>
                   </section>
			
			<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
			 <Row>
    <Col style={{textAlign:'center'}}>
    <h1 style={{textAlign:'center',marginTop:"30px",marginBottom:"30px",fontWeight:'bold'}}>Our story</h1>  
    </Col>
    </Row>
  <Row>
    <Col className='pad_cen' style={{textAlign:'center'}}>
    <Youtube_player videoId={videoId} height={height} width={width}/>
    </Col>
	
  </Row>
</Container>

<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
    <p className="text-muted ">	
	
	Traveling means live the unlived moment and the path to know ourself in a better way.
	We Hike2Heaven provide you everlasting feeling of trekking and traveling Meet As UNKNOWN And Leave As WELL-KNOWN. 
	Give a Chance to Us for Exploring the Place in A Different Manner. You are most Welcome as Couple as well As Groups.
	</p>
</Col>
 </Row>
</Container>

<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'center'}}>
    <h1 style={{textAlign:'center',marginTop:"30px",marginBottom:"30px",fontWeight:'bold'}}>Core team members</h1>  
    </Col>
    </Row>

    <Row style={{marginTop:'50px'}}>
	
	<Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/img4.jpg" roundedCircle thumbnail />
     <br/>
     <br/> 
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Mohit Chauhan</h4>
     <p className="text-muted "><br/>Take a chance and live life to the fullest. 
	 When we are at our most daring is when we feel the most fulfillment.
	 It isn't about taking, it is about absorbing the beauty of the world.<br/><br/></p>
    </Col>
	
	<Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/img5.jpg" roundedCircle thumbnail />
     <br/>
     <br/> 
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Rahul Mehta</h4>
     <p className="text-muted "><br/>Walk away quietly in any direction and taste the freedom of the mountaineer.
	 Camp out among the grasses and gentians of glacial meadows, in craggy garden nooks full of nature’s darlings.
.<br/><br/></p>
    </Col>
	
	
	 <Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/tanu_team.jpg" roundedCircle thumbnail />
    <br/>
     <br/>
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Tanuja Gaithwal</h4>
	  <p className="text-muted "><br/>Everybody wants to reach the peak, 
	  but there is no growth on the top of a mountain. 
	  It is in the valley that we slog through the lush grass and rich soil,
	  learning and becoming what enables us to summit life’s next peak.<br/><br/></p>
    </Col>

    <Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/img1.jpeg" roundedCircle thumbnail />
     <br/>
     <br/>
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Kali Bahadur</h4>
     <p className="text-muted "><br/>When everything feels like an uphill struggle,Just think of the view from the top.
	 Over every mountain, there is a path, although it may not be seen from the valley.<br/><br/></p>
    </Col>
	
	<Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/deepak_team.jpg" roundedCircle thumbnail />
    <br/>
     <br/>
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Kabir Nirala</h4>
     <p className="text-muted "><br/>Nature is not a place to visit. It is home.<br/>
	 Climb the mountain not to plant your flag, but to embrace the challenge,
	 enjoy the air and behold the view. Climb it so you can see the world, not so the world can see you.
	 Mountains are freedom. Treat them respectfully.<br/><br/></p> </Col>

    <Col style={{textAlign:'center'}} md={4} lg={4}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/img2.jpg" roundedCircle thumbnail />
     <br/>
     <br/> 
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Mohan Bisht</h4>
     <p className="text-muted "><br/>Everyone wants to live on top of the mountain,
	 but all the happiness and growth occurs while you are climbing it.<br/>
	 Mountains have a way of dealing with over-confidence.
<br/><br/></p>
    </Col>
	
	


  </Row>

  <Row style={{marginTop:'40px'}}>
    <Col style={{textAlign:'center'}}>
    <h6 style={{textAlign:'center',fontWeight:'700'}}>“The best view comes after the hardest climb.”</h6>
    </Col>
   </Row>
</Container>


<Container style={{padding:'2%'}}>
	<Row>
	<Col>
	<p className="text-muted " style={{margin:'0px'}}>	
	
  <div style={{marginTop:"30px",marginBottom:"30px"}}><h4>Team and facilities</h4></div>
	
	
	Team: Besides Trek Leaders, every batch has sufficient support staff including local guides, cooks and helpers .
	<br/>

	Food: Hygienic, energising and majorly vegetarian food with occasional egg dishes. 
	<br/>
	Equipment:  well maintained sleeping tents, dining tents, toilet tents and other equipment like climbing ropes, crampons etc. 
	<br/>
	Trek leaders: Qualified with Basic Mountaineering Course and Advanced Mountaineering Courses
	<br/>
	Emergency Equipment: Stretcher, oxygen cylinders and well-stocked First Aid kits. 
	<br/>
	High Altitude Chambers (GEMO Bag) in certain high altitude treks. (Specially in panpatiya trek and ronti pass).
	<br/>
	Accommodation: In comfortable guesthouses at base camps or in high quality tents on twin sharing basis.
		</p>
    <br />
		</Col>
		
	  </Row>
</Container>

<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'center'}}>
    <h1 style={{textAlign:'center',marginTop:"30px",marginBottom:"30px",fontWeight:'bold'}}>Founders</h1>  
    </Col>
    </Row>

    <Row style={{marginTop:'50px'}}>
	
	<Col style={{textAlign:'center'}} md={6} lg={6}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/deepak_new.jpg" roundedCircle thumbnail />
    <br/>
     <br/> 
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Kabir Nirala</h4>
     <p className="text-muted " style={{whiteSpace:'pre-line'}}><br/>Having totally different love..
With lovely shades of my world
.White sheet somewhere
somewhere found green peace
People living there are love of my reach
Words can't describe my feelings....

Wanna know reason of my happiness
Just come and see Himalayas .....
Where you found most of the divas and Villages where you find amazing ones
Cute and amazing ones
Where's no fraud is done
Pollution is none
treat you like special one
Amazing nature with almost done.<br/><br/></p> </Col>
	
	<Col style={{textAlign:'center'}} md={6} lg={6}>
    <Image style={{height:'200px',width:'200px'}} src="/static/media/extra_slider/tanu_new.jpg" roundedCircle thumbnail />
    <br/>
     <br/>
     <h4 className="family" style={{textAlign:'center', fontWeight:'700'}}>Tanuja Gaithwal</h4>
	  <p className="text-muted "><br/>Just living is not enough one must have sunshine, freedom and little colors. 
	  Nature always wears the colours of the spirit. Those who contemplate the beauty of the earth find reserves of strength that will 
	  endure as long as life lasts.
<br/><br/></p>
    </Col>
	
  </Row>
</Container>			

<Container style={{padding:'2%'}}>
	<Row>
	<Col>
	<p className="text-muted ">	
We have been working in the Adventure Area with an Experience and Knowledge of 6 Years.

In the way to listen conspicuous sermons of nature 

Partner in path to resolve the mystery of Himalayas 

Pilgrim of this overwhelming wonderful journey which ends with (1/0) destination

Leave a good mark here its your choosen  beautiful world You are intellectually fullfil so introduce your self will with nature not as abominable 
Nature discovered a fanatic person inside you and its your  ability to give  graceful bow to nature
Uncoverd the mystery of nature but don't cover it with plastic 
Now here in end you are with Enormous Enthusiasm make sure you have given it nature too 
Its your destination make sure it will remain beautiful with your steps.

<br/><br/>We know in this era it is hard to believe and trust on 
 company among thousands of them.

But, the people who choose us know this very well that, we always keep our promises;

be it in reference to Services, Safety or Adventure.

Trust us! And get your tremendous experiences from here.	
					
		</p>
</Col>
</Row>
		</Container>
			</div>
			}
}

export default About;