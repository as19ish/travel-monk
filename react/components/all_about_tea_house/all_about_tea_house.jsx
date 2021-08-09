import React, { Component } from "react";
import axios from 'axios';
import './all_about_tea_house.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class All_about_tea_house extends React.Component {
render() {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = 'olJbD9KSg2M';
let height = '390';
let width = '100%';

let tea_type_carousel_item_array=['Garhwali','Ghingharu','Green','Himalayan','Lemon','Orange','Rooibus','Tulsi']
let tea_type_carousel_item = []
for (let i=0;i<tea_type_carousel_item_array.length;i++)
{
	let source='/static/media/tea_house/tea_type/'+tea_type_carousel_item_array[i]+'.jpg'
	tea_type_carousel_item.push(<Carousel.Item>
    <img
      className="d-block w-100"
      src={source}
      alt={tea_type_carousel_item_array[i]+' tea'}
    />
    <Carousel.Caption className='tea_house_carousel_caption'>
      <h3>{tea_type_carousel_item_array[i]+' tea'}</h3>
      <p>Hike2Heaven</p>
    </Carousel.Caption>
  </Carousel.Item>)
	
}

let tea_type_carousel_item_array1=['tea_h_1','tea_h_2','tea_h_3','tea_h_4','tea_h_5','tea_h_6','tea_h_7','tea_h_8','tea_h_9','tea_h_10','tea_h_11','tea_h_12','tea_h_13']
let tea_type_carousel_item1 = []
for (let i=0;i<tea_type_carousel_item_array1.length;i++)
{
	let source='/static/media/tea_house/slide1/'+tea_type_carousel_item_array1[i]+'.jpg'
	tea_type_carousel_item1.push(<Carousel.Item>
    <img
      className="d-block w-100"
      src={source}
      alt={tea_type_carousel_item_array1[i]+' tea'}
    />
    <Carousel.Caption className='tea_house_carousel_caption'>
      <h3>Tea house</h3>
      <p>Hike2Heaven</p>
    </Carousel.Caption>
  </Carousel.Item>)
	
}


let tea_type_carousel_item_array2=['tea_h_1','tea_h_2','tea_h_3','tea_h_4','tea_h_5','tea_h_6','tea_h_7','tea_h_8','tea_h_9','tea_h_10','tea_h_11','tea_h_12','tea_h_13','tea_h_14','tea_h_15']
let tea_type_carousel_item2 = []
for (let i=0;i<tea_type_carousel_item_array2.length;i++)
{
	let source='/static/media/tea_house/slide2/'+tea_type_carousel_item_array2[i]+'.jpg'
	tea_type_carousel_item2.push(<Carousel.Item>
    <img
      className="d-block w-100"
      src={source}
      alt={tea_type_carousel_item_array2[i]+' tea'}
    />
    <Carousel.Caption className='tea_house_carousel_caption'>
      <h3>Tea house</h3>
      <p>Hike2Heaven</p>
    </Carousel.Caption>
  </Carousel.Item>)
	
}





    return (

<div>
<div className='div_static_back_tea'>
</div>
<h2 className="all_blogs_heading" style={{marginTop:'30px',marginBottom:'30px'}}>Beautifull Tea Houses at <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col sm={12} md={12} lg={12} className='pad_cen'>
    <Youtube_player videoId={videoId} height={height} width={width}/>
	
	 </Col>
  </Row>
</Container>

<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
    <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
     
	 <span style={{fontWeight:'700'}}>Tea is beautiful beyond love</span> and <span style={{fontWeight:'700'}}>Tea Houses are love beyond life</span> if you're a tea-lover"
	 <br/><br/>

Tea house trekking is a trekking program based on teahouses scattered all along the trekking trails of garhwal himalayas. 
Tea houses basically refers to mountain lodges operating the bedding and eating facilities for trekkers in the high 
altituted and deep forests covered with snow where no other shops restaurents or any grocery store is available.
These tea houses not only deliver tea ,maggie and other goods but also a magnificient view that not only 
soothens mind but also helps in refreshing of mind.
<br/>
<br/>

These tea houses are popular for amazing view of river, snow covered peaks,medows at high altitutes.
The best of these tea houses is they are eco friendly and plastic free all services offfered are free from 
plastic and eco friendly too. 
<br/>
<br/>
These tea houses serve a duo purpose as they offer not only tea but entertainment and medical facilities too. 
Bon-fires, musical parties are be the centres of attraction,

We provide different types of Tea and Himalayan food.  
</p>
	
	 </Col>
  </Row>

  
 <div style={{marginTop:"30px",marginBottom:"30px"}}>
 <h6>Contact us to book your Tea House now</h6></div> 
<div className="row">
      
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign:'center',fontWeight:'bolder',  fontSize: '20px'}}><i class="fas fa-envelope"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="mailto:mountainsrover@gmail.com">mountainsrover@gmail.com </a></p>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="p-card">
        <p style={{textAlign: "center", fontWeight: 'bolder', fontSize: '20px'}}><i class="fas fa-mobile-alt"></i></p>
      <p style={{textAlign:'center',fontWeight:'500'}}><a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919557115706">+919557115706</a>  ,<a style={{textDecoration:'underline', cursor:'pointer'}} href="tel:+919756245146">+919756245146</a></p>
      </div>
    </div>
  </div>
</Container>

<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col sm={12} md={12} lg={12} className='pad_cen'>
	<Carousel className='tea_house_carousel'>	
		{tea_type_carousel_item}	 
    </Carousel>
	 </Col>
  </Row>
</Container>

<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
 <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
<span style={{fontWeight:'700'}}>If you are cold it will warm you. if you are too heated it will cool you. 
If you are depressed.it will cheer you.if you are excited, it will clam you.</span>
<br/>
<br/>
Benefits of Teahouse Trekking over Camping Trekking
There are obvious benefits to taking a teahouse for the night than to opt for camping when trekking in himalayas. 
The first advantage is the convenience that these unique lodges offer. 
Being set at the locations where most people tend to stop for the night, 
they are perfectly located for most trekkers, unless you are following an itinerary that is not 
common along the routes. With most treks in himalayas now being well established, the majority of 
trekkers tend to follow the same daily itinerary, stopping in the same places when night falls. 
<br/>
<br/>

Another major advantage of the teahouses is the comfort they give you. 
Camping requires you to pitch your tent and you will find yourself sleeping on the ground, 
and in the cooler periods of the year, the ground can be quite cold. You will also need to have a good sleeping bag, 
as you will not have the benefits of heating. Teahouses will usually have some form of wood-burning stove running, 
which will help to keep you warm at night, and while they do not offer the comfort of a luxury hotel, when you have 
spent the day trekking through forests and up mountains, even the simplest of beds feels like the lap of luxury. 
And that little bit of warmth that the stove kicks out can make all the difference between a good night’s sleep and not.
</p>
    </Col>
  </Row>
</Container>

<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col sm={12} md={12} lg={12} className='pad_cen'>
	<Carousel className='tea_house_carousel'>	
		{tea_type_carousel_item1}	 
    </Carousel>
	 </Col>
  </Row>
</Container>


<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
 <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
Then you have the fact that, when staying at teahouses, you will not need to carry a heavy tent with you along the trail. 
One of the downsides to camping when trekking is that you have to carry your tent with you, 
unless you hire a porter to carry it for you. Even if you do have a guide, they do not usually carry your gear, 
and will insist that you have porters for that. 
If you are trekking solo or as a private group with no guides and porters, then your pack will include your tent, 
which makes it heavier. 
</p>
    </Col>
  </Row>
</Container>


<Container className='border_color' style={{background:'#f8f9fa',padding:'1%'}}>
  <Row>
    <Col sm={12} md={12} lg={12} className='pad_cen'>
	<Carousel className='tea_house_carousel'>	
		{tea_type_carousel_item2}	 
    </Carousel>
	 </Col>
  </Row>
</Container>


<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
 <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
Trekking 7-8 hours with that extra load can make you more tired, and can even leave you enjoying the experience less. 
Without a tent weighing you down, and the ability to sleep in a bed at night, you can enjoy the scenery more without 
worrying about getting too tired by the end of the day.
while assending continous  climbing of 7-8 hrs makes tired and houngry too these tea houses also serve maggie, 
tea  which acts asva booster during trek, here,trekkers can take rest without wasting time in pitching tent 
and making food.
<br/>
<br/>
<b>What is mountain tea good for?</b>
<br/> 
It is said to have a positive effect on almost anything that ails you, but mostly it is used to combat colds, 
respiratory problems, indigestion, and mild anxiety. It is said to bolster the immune system and is valued for 
its antioxidants, as an anti-inflammatory and to reduce fever.
</p>
    </Col>
  </Row>
</Container>



</div>
    )


}
}



export default All_about_tea_house;