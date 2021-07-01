import React, { Component, Suspense } from "react";
import './activity_call.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Modal,Container,Row,Col,Accordion,Card,Image } from 'react-bootstrap';
import $ from 'jquery';

function MyVerticallyCenteredModal1(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{color:'white'}}
    >
      <Modal.Header closeButton className="modal_cross_sign_white" style={{background:'black'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem'}}>
          ACTIVITIES
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p id='replace_br' style={{color:'black',fontSize:'1.2rem',fontWeight:'600'}}>
          {props.data}
        </p>
      </Modal.Body>
	  <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:'#ffc107',color:'black'}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModal(props) {
	
const [modalShow, setModalShow] = React.useState(false);
const [content, setContent] = React.useState();

$(document).ready(function(){
if ($(window).width() < 600) {
   let elem = document.getElementsByClassName("img_width_50");
   for(let i=0;i<elem.length;i++)
   {
   elem[i].style.width='100%'
   }

}
});

let headings=['jungle camping of himalayas',
                'meadows camping',
                'music',
                'night trekking',
                'river side camping',
                'round fire',
                'snow camping',
                'village tourism',
                'yoga in himalayas',
				'other activities']
 
let data1=[]
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}> <span> <h2>Jungle Camping Of Himalayas</h2> <p style={{textAlign:'left'}}> From the snow-capped mountains of Himalayas to the lush green valleys of himalayas, India consists of varied landscapes. Because of its interesting geography, it has a rich flora and fauna to its credit. Forests or ‘jungles’ are present throughout the country and consist of different varieties of plants and animals. You must go camping in these forests owing to the adventure seeker in you. While deciding upon a place, choose the offbeat ones for an eccentric experience. It will provide you a much needed adrenaline rush and make you fully appreciate the beauty that nature is. Himalayas offers the most unique jungle camping experience you can dream. </p> <br/> </span> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col><Image src="/static/media/jungle_camping1.jpg" style={{width:'100%'}}/></Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'left'}}> <b>Some major equipment you will need :</b> <p> Tent (good quality)<br/>Mattress or sleeping bag<br/> Torch/flashlight<br/>Swiss army knife<br/>Tarpaulin (to protect against rain)<br/> Ropes<br/>Hammer<br/> <b>Don’t forget these essentials : </b><br/>Ration food<br/>Insect repellent<br/> Sanitizer<br/>First aid kit<br/>Sunscreen<br/> </p> </div> </Col> <br/><br/> <Col><Image src="/static/media/jungle_camping4.jpg" style={{width:'100%'}}/></Col> </Row> <br/> <Image src="/static/media/jc1.jpg" style={{width:'100%'}}/> <br/><br/> <Image src="/static/media/jc2.jpg" style={{width:'100%'}}/> <br/><br/> <Image src="/static/media/jc3.jpg" style={{width:'100%'}}/> <br/><br/> <Image src="/static/media/jc4.jpg" style={{width:'100%'}}/> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}> <h2>Meadows Camping</h2> <p style={{textAlign:'left'}}><b>About Himalayan Meadows / Bugyal</b><br/><br/> In the Himalayan foothills, green velvet meadows begin to form where the timber line (ie rows of trees) end. They are usually situated at an altitude of 8 to 10 thousand feet. These plains in the Garhwal Himalaya are called Bugyal.<br/><br/> Bugiyal is the area between the snow line and the tree line. They provide pasture work for the local people and cattle, and a resting place and campsite for banjars, nomads and trekking enthusiasts. In the winter when the white sheet of snow is laid on the velvety grass of summer. Their beauty is that new color appears on them in every season. After the rainy, colorful flowers bloom from place to place on these steep plains. Plants grow to a certain height in Bugyalas. According to the climate, they are not very high. This is why walking on them feels exactly like walking on a mattress. </p> <br/> </div> </Col> </Row> <br/><br/> <Row> <Col><Image src="/static/media/meadows2.jpg" style={{width:'100%'}}/></Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> <b>Some beautiful bugiyal</b><br/> <b>bedni bugiyal</b> <br/></p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/meadows3.jpg" style={{width:'100%'}}/><br/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/Ali_bugyal1.jpg" style={{width:'100%'}}/><br/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/Ali_bugyal2.jpg" style={{width:'100%'}}/><br/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p> Bedini Ali bugiyal is asias most beautiful bugiyal According to ancient beliefs, it is said that Lord Ved Vyasa composed the Vedas at this place. Because at such a place Lord Ved Vyas ji has composed the Vedas. Due to which this place got its name There is a small bedni Kund in Bedini Bugyal which has a temple of Ved Vyas ji and also a temple of Nanda Devi Mata. During the Nanda Devi Yatra, people bathe in this. Kund There is also a stone rock on the edge of this pool. In the rainy season, this bedini lake shows a very beautiful and attractive reflection of Trishul peak and Nandaghunti peak Different types of flowers bloom at this place every season and during rainy times flowers of many species bloom in this place. Whose view is very amazing and beautiful. Bedini Bugyal is the last stop of the choti Nanda Devi Yatra. This choti Nanda Devi Yatra is held here in the month of September every year... During that time a very grand fair is organized here... There is a large pasture for mules, horses and sheep. There are two temples and a small lake which adds to the beauty of the place. One can see many peaks of Himalayas from Bedni Bugyal bridge ..<br/><br/> View point . bedini Ali bugyal Bedini kund Nandadevi temple Vedvyas temple Vedvyas shila Two other temple Bedni top .. </p> </Col> </Row> <br/><br/> <b>panwali kantha</b> <br/> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/meadows4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/pn1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p> There is such a beautiful place from which people do not feel like coming back The grasslands here cover the snow sheet in winter. There are many flowers blooming here in summer and rainy season. On the way you will find lots of chhaniyan where people to graze their goats ko or Buffalo. On the way you will find lots of small meadows which will be in the mid-mid of the forest. Panwali Kantha trek is one of the best Trek in Tehri Garhwal. It has high altitude meadows of Garhwal Himalayas. Apart from exhilarating bugyal. </p> </Col> </Row> <b>Dayara bugiyal</b> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/dayara_1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/meadows5.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p> Dayara Bugyal has all the markings of great meadows: smooth, undulating carpets as far as your eyes can see with mountains that rise above 6000 metres popping off of them. Just the sheer scale of Dayara Bugyal is difficult to find in our country. In fact, we can only name a few – Ali and Bedni Bugyal, Gidara, Gorson, Panwali Kantha. Bedni is inaccessible, Gorson too, Panwali Kantha does not quite match up to the scale and Gidara is not yet on the trek maps of our country. Which leaves Dayara as one of the rare alpine meadows. ((If you’d like to see green meadows, time your trek between April and June. In April, Dayara Bugyal has a good mix of snow and greenery, since it’s Spring. Everything is just sprouting and fresh! In May, you’ll see more green. In June, you’ll see flowers sprouting in the meadows, especially around the second week of June.)) </p> </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Music</h3> <p style={{textAlign:'left'}}> We provide some music instrument for better your trip like guitar flute cajon box etc </p> </div> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music_11.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/music_12.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Night trekking </h3> <p style={{textAlign:'left'}}> Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you are climbing it. </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/night1.jpg" style={{width:'100%'}}/> </Col> </Row> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/night2.jpg" style={{width:'100%'}}/> </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>River side camping </h3> <p style={{textAlign:'left'}}> Riverside Camping: The more you camp the better you become. Riverside camping, as is evident by the name itself, is camping along a riverbank. It lets you fall asleep to the soft music of flowing water and wakes you up to the first magical rays of the sun. It is mostly done when rafting or kayaking. In India, the most popular destination for riverside camping is Rishikesh. The adventure lovers generally follow  camping and spend some quality time with friends and family amidst nature.You can set up your own camp or stay in already built camps. Riverside camping lets you calm your senses and refresh your energy for a fresh battle in the city life once again. As you are on a riverbank, you can also enjoy fishing. During night, you can have fun around a bonfire and enjoy Maggie with friends. <br/> <b>River side camping in Himalayas river : </b>Alknamda<br/>Pindari<br/>Bhagirathi<br/>Bilangana </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/river1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/river2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/river3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/river4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <b>SOME IMPORTANT CARRY ALONG ITEMS</b><br/> Water purification tablets<br/>Knives<br/>Good quality tent <br/>Waterproof matches<br/>Flashlights<br/>Insect repellants <br/>Sanitizers<br/>Sleeping bag<br/>Aluminum foils to store your food neatly <br/>Sunscreen<br/>Toilet paper </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Round fire</h3> <p style={{textAlign:'left'}}> The fire is the main comfort of the camp, whether in summer or winter. </p> </div> </Col> </Row> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> A campfire is a fire at a campsite that provides light and warmth, and heat for cooking. It can also serve as a beacon, and an insect and predator deterrent. Established campgrounds often provide a stone or steel fire ring for safety. Campfires are a popular feature of camping. </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire5.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire6.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire7.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/fire2.jpg" style={{width:'100%'}}/> Providing facilities, Round fire with chicken party. </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Snow Camping</h3> <p style={{textAlign:'left'}}> snow Camping Can Be A Beautiful Experience. Many people have been camping in the spring, summer, and fall. Especially here in himalayas, we’re fortunate to have access to many gorgeous and peaceful natural areas. But to go in the winter? In the snow? This is where many stop short, worried about the cold temperatures, or if they will be preparedenough. But being outside in nature, without the crowds (and bugs) that you’ll find the rest of the year can be a magical experience. Watching the snow fall, away from bright city lights, sipping hot cofee under the stars, and bonding over a shared experience can shift your perspective away from a fear-based mentality toward an understanding of how. </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/snow1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> Sleep under a blanket of stars, and your heart will forever be kept warm by your love of life.” The stars were better company anyway. They were very beautiful, and they almost never snored. Nature has been for me, for as long as I remember, a source of solace, inspiration, adventure, and delight; a home, a teacher, a companion snow camping has its perks. There are fewer bugs and crowds while you experience the beauty and peacefulness of a pristine winter wonderland. But, if you’re not prepared, it can also be cold and challenging. To set yourself up for a successful snow  campout, you’ll want to build on your knowledge of fair-weather camping while adjusting for the additional challenges of cold temperatures, snowy landscapes and unpredictable weather. </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/snow2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> When you reach your destination for the day, rather than immediately unpacking, take some time to find the right camp spot. Relax, have a snack, put on some warm clothing layers and examine the area for these things: <br/><b>Wind protection: </b><br/> A natural wind block, like a group of trees or a hill, can make your experience more comfortable. Water source: Is there a good water source nearby, or will you need to melt snow? <br/> <b>Avoid camping on vegetation:</b> In patchy snow conditions, set up camp on the snow or an established campsite of bare ground. <b>Avalanche risk:</b> Make sure you’re not on or below a slope that could slide. <b>Hazard trees: </b> Don’t setup underneath unstable or damaged trees or limbs. <b>Privacy:</b> It’s nice to have some distance between you and other campers. <b>Where the sun will rise:</b> A spot that offers exposure to sunrise will help you warm up faster. Landmarks: Keep an eye out for landmarks to help you find the camp in the dark or a snowstorm. <br/> <b> High altitude Mountain Camping:</b> Of all the roads you take in life make sure, some of them have snow Mountain Camping is a smaller branch of a bigger tree called Camping. Often done after trekking or hiking, mountain camping requires immense physical and mental strength. However, the result is so beautiful that you will want to climb a mountain repeatedly for this experience. You will be so close to the stars that, it will feel like you are one of them. As mountain camping requires you to live in the wild slopes of a mountain, it is advised to be well prepared because ‘prevention is always better than cure’. So let outdoorkeeda decode for you all the information about mountain camping. </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/snow3.jpg" style={{width:'100%'}}/> </Col> </Row> Making Camp in the Snow <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/snow4.jpg" style={{width:'100%'}}/> </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Village Tourism</h3> <p style={{textAlign:'left'}}> Once in a while, the heart desires solitude,and to just soak in the beauty of nature around. For such yearnings,we suggest seven of the most breathtaking Himalayan villages to you. <b>HIMALAYA</b> is one of the most beautiful mountain ranges in the world. These mountains are calm, quiet, and full of tranquillity. We feel so much better here. It feels like you are so close to nature. Big cities of Himalayan range like  uttrakhamd  <b>GARHWAL Himalaya KUMAON Himalaya</b> got ruined by millions of tourists but there are small villages out there which are still pretty far away from our stressful life. You must visit these places before you die. Here is the list of Himalayan <br/> <br/> </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><b>Kanol village  chamoli</b> <p style={{textAlign:'left'}}> Kanol village is situated in the lap of the Himalayas. It is very beautiful village. And people here spend their livelihood by cultivating and this village sees the Himalaya's view. </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kanol1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kanol2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kan1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kan2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kan3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kan4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/kan5.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><b>Harshil Village</b> <p style={{textAlign:'left'}}> Harsil is a hill station and an army area on the banks of the Bhagirathi River, on the way to the Hindu pilgrimage, Gangotri, in Uttarkashi district of the Indian state of Uttarakhand </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/harsil.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/harsil1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><b>Dronagiri village</b> <p style={{textAlign:'left'}}> Dronagiri village is located in Joshimath Tehsil of Chamoli district in Uttarakhand, India. It is situated 60km away from sub-district headquarter Joshimath and 127km away from district headquarter Gopeshwar. As per 2009 stats, Dronagiri village is also a gram panchayat </p> </div> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/Dronagiri-village1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/Dronagiri-village2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/Dronagiri-village3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> Dronagiri peak is not visible from the village. One has to go about 2 kms ahead to a place called the Dhaar, a gentle walk from where the mountain is seen just across. And if you are looking for a greater thrill, a 4 km trek can take you to “Nandi Kund” from where you can see the array of mountains at arms stretch </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><b>Milan village</b> <p style={{textAlign:'left'}}> Milam is on a route over high mountain passes (Unta Dhura, Jandi Dhura and Kingribingri Dhura) to Gyanima mandi in Tibet. The border is closed since the Sino-Indian War of 1962, and Milam is now a ghost village with very few inhabitants. Before the war, it used to be a trade center bustling with 500 families. As of now all trade with Tibet is stopped and the families have settled in Munsiyari and other places in the lower ranges. In summer months very few people go there and cultivate medicinal plants, high altitude Buckwheat and Jambhu. Tibetan merchants visited this place and traded in Borax, precious stones, Pashmina and salt. The inhabitants of Milam too travelled along with pack mules to Tibet. They took rice, cotton clothes, jaggery, sugar, etc. to sell in Tibetan markets. The famous pandit-explorers Nain Singh and Kishan Singh who mapped Tibet territory belong to this village. </p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/milam1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/milam2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> the trek to Milam village starts from Munsiyari a road head that can be reached from Almora or Pithoragarh. The trek passes through Lilam, Bogudiar, Rilkot, Martoli, Burfu and Bilju. Prominent peaks situated above the glacier are Hardeol, Trisuli, Nanda Ghoonti etc. Some of the camping places above the glacier are Nitwal dhar, Suraj kund etc. Nandadevi East base camp can be reached through a side valley from Ghangar and Pacchu villages. <br/><br/> <Image src="/static/media/milam3.jpg" style={{width:'100%'}}/> <br/><br/> <Image src="/static/media/milam4.jpg" style={{width:'100%'}}/> The ideal trekking period is from May to October excluding monsoon months. However, as the inhabitants of the upper villages tend to move down the valley for the winter months trekkers may find that food and accommodation is not available especially after the festival of Diwali. </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><b>Chitkul village</b> <p style={{textAlign:'left'}}> Chitkul (or Chittkul) is a village in Kinnaur district of Himachal Pradesh. During winters, the place mostly remains covered with the snow and the inhabitants move to lower regions of Himachal. According to a recent study by Centre of Atmospheric Sciences at IIT Delhi, Chitkul has the cleanest air in India. Chhitkul is a green, lush, tiny, beautiful, traditional and remote mountain village, high above Sangla in the Sangla Valley. It has little in the way of tourist infrastructure, but has a handful of basic accommodation, restaurants and minimally stocked shops</p> </div> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/chitkul1.jpg" style={{width:'100%'}}/> </Col> </Row> </div>)
data1.push(<div> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Yoga in Himalayas</h3> <p style={{textAlign:'left'}}> Evolved by the sages over thousands of years ago, Yoga is a holistic system for rebalancing the mind, body and spirit which elevates the level of human consciousness and results in a state of eternal bliss. There can be no better place to learn and practice the ancient art of Yoga in Himalayas amidst the majestic mountains and serene valleys of the Himalayas which is believed to be the locus origins of Yoga itself. <br/> <br/> </p> </div> </Col> </Row> <br/><br/> <h4 style={{textAlign:'center'}}>Four Reasons To Practice Yoga In Himalayas</h4> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> 1st <br/> Himalayas with its lush green forests of pines, cedars etc, snow-capped peaks and secluded valleys traversed by serpentine roads offer the perfect backdrop to practice Yoga. The quiet and serene environs of the Himalayas provide the ideal setting to indulge in meditation. The calm atmospheres there shielded from the hustle-bustle of savage city life provides yogis with an opportunity to embark on a self-exploratory and transforming journey. Such awe-inspiring nature’s beauty and serenity provides an automatic source of inspiration for yoga and meditation. </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/yoga1.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> 2nd <br/> The weather of the region, especially in the foothills of Himalayas, is perfect for practicing Yoga. Most yoga institutes here operate mostly and almost exclusively during summer season, when the daytime temperatures but not too hot or humid as in other parts of the subcontinent. For participants not accustomed to hot tropical climates but wishing to learn Yoga in India, the pleasant weather of Himalayas in the summers makes their yoga learning experience comfortable. </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/yoga2.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> 3rd <br/> Besides being resplendent in beauty, Himalayas are also enormously endowed with culture and heritage. A number of places in the mountains especially around Himachal and Uttarakhand have some spiritual connection. Many Tibetan monasteries and ancient Hindu temples dot the region. The spiritually charged atmosphere of Himalayas is a blessing in disguise for the yogis practicing yoga, meditation and pranayama in the Himalayas. </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/yoga3.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <p style={{textAlign:'left'}}> 4th <br/> While it is mainly yoga that attracts yogis from India and abroad alike, to the Himalayan region, the mountains and valleys accommodate many popular tourist destinations. The region has something on offer for all kinds of travelers from spiritually inclined souls to adventure seekers, from explorers and nature-enthusiasts. While learning yoga in the region, students take out time and indulge in activities as mountaineering, trekking, paragliding, water-rafting, rappelling etc. Himalayas also offer gastronomic delight to foodies who can gorge on local delicacies of the region, Tibetan and other Indian and international cuisines. </p> </Col> </Row> <br/><br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <Image src="/static/media/yoga4.jpg" style={{width:'100%'}}/> </Col> </Row> <br/><br/> </div>)
data1.push(<div> <br/> <br/> <Row className="all_blogs_row"> <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1.1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}> <div style={{textAlign:'center'}}><h3>Other Adventure Activities</h3> <p style={{textAlign:'left'}}> Some other adventure activities <br/>Such as: <br/> River crossing <br/> Night trekking<br/> Rock climbing <br/> Glacier crossing <br/> <Image src="/static/media/other_ad1.jpg" style={{width:'100%'}}/> <br/> <br/> <Image src="/static/media/other_ad2.jpg" style={{width:'100%'}}/> </p> </div> </Col> </Row> <br/><br/> </div>)

let cols=[]
for(let i=0;i<headings.length;i++)
{
	cols.push(<Col xs='12' sm='12' md='3' lg='3'> <p onClick={() => {setModalShow(true);setContent(data1[i]);}} style={{fontSize:'1.1rem',fontWeight:'600',cursor:'pointer',textTransform:'capitalize',textDecoration:'underline',color:'green'}}>{(i+1)+'.'+' '+headings[i]}</p></Col>)
}

let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
  return (
    <Modal
      className="modal_width_100"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          MountainsRover
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="callback_modal">

<Accordion style={{marginBottom:'2%'}}>
      <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="100">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Activities</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="100">
               <Card.Body>

                    <Container className='all_blogs_container'>
                    
					<Row>
					<Col><h3 style={{textAlign:'center'}}>Click Below Activities For Details</h3><br/><br/></Col>
					</Row>
					
                      <Row>					  
					  {cols}					  
					  </Row>
                      


                   </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>


{/*card for Food On Trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="104">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Food On Trek</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="104">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>

                               Standard -  Simple Tasty Food including the 3 meals, i.e breakfast,
                                lunch and dinner with morning and evening tea/coffee
                                We providing  traditional food in every trek
                                We provide veg and non veg  both item
                                Luxary - All the 3 meals included in standard menu + evening snacks,
                                hot drinks and sweet dishes every day, added
                                with chocolates, biscuits and dry fruits for the day's walk.
                                <br/><br/>
                                At Hike2Heaven
                                we understand that your vacation is
                                very special to you. We put into ground all of our
                                 expertise from the field, unsurpassed knowledge of the
                                sport, relentless physical effort, top quality equipment
                                and efficient planning to make your travel a memory for lifetime.


                                  </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>

                       <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/food1.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
                                 <Row className="all_blogs_row">
								 
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/food2.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
                                 <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/food3.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
                                 <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/food4.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
								 <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/non1.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
								 <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/non2.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>




{/*card for fitness......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="105">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Physical Fitness For Trekking</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="105">
               <Card.Body>

                    <Container className='all_blogs_container'>
                    <Row className="all_blogs_row">
                            <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                                 <Image src="/static/media/fit.jpg" className='img_width_50'/>
                                 </Col>
                                 </Row>
								 <br/>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>

                                <b>Physical fitness is secondary things
If your mentally will power is very strong then you can do any
track very easily...</b>
1st Strong your will power  then your physical fitness

<b>Why do we need to be physically fit before starting a Trekking trip?</b>

1st As we gain higher altitude in a trek, the air becomes thinner. <br/>
To cope up with the decreasing level of Oxygen we need to build Aerobic fitness.<br/>
2nd Defying gravity and walking for a long duration on a steep
slope with a rucksack/day-pack require a moderate level of Strength and Endurance training.<br/>
3rd Above two get coupled on any high
altitude Himalayan trek and it is a must that we spend time and effort to address these.<br/>

<b>How to get fit for a trek?</b><br/>
Although walking is something most people do every day,
we strongly urge you to train for your trek. You should start training
several months before your trek and we’re here to help you understand
and guide you how to achieve optimum fitness. You will enjoy this
challenge far more if you are physically fit. Even if you walk
regularly and have a good level of fitness, you will still need to train for this type of long-distance walking at higher altitudes.
<br/>
<b>So how do we achieve the desired fitness level needed for a trek?</b>
<br/>
This is purely quantitative but again depends on
present physical condition, which difficulty level the trek will offer and on the age to an extent.

More the time we spend on physical training better
 is the result. However this a basic guideline to improve spending at least 8 weeks (2 months).

The below training plan is a basic trekking fitness
programme for beginners. If you are already in a physical
fitness routine for being into any sport or just to live an
active healthy life, check our detailed post on advanced fitness programme for trekking and beyond.
<br/>
                                 <Image src="/static/media/fit1.jpg" className='img_width_50'/>
      <br/>                        
<b>Aerobic Fitness:</b><br/>

<b>1st Phase:</b><br/>

1) Walking: At the starting days it is a good starter.
Walk 4/5 Km everyday, if possible on slopes. Maintain a speed.
Complete 5 Km walk withing an hour. Continue for 5 days a week for 3 weeks.<br/>

2) Stretching: Once you complete the walk , do some usual regular
stretching exercises/free hands including shoulder, neck, arms, waist
and legs. Always do the stretching after your body is warmed up.
Cold stretching is ineffective an may develop injuries.10 to 15 minutes.<br/>

Once you complete the initial 3 weeks you can start building
up on it. You can start either of the following.<br/>

<b>2nd Phase:</b><br/>

a) Jogging can be done inside a park or on a treadmill.
Avoid jogging on concrete or tarred surface and use a properly
cushioned running shoe. Initially try to cover 3 Km in 20 minutes
and later 5 Km in 30 minutes. Follow stretching exercise as mentioned
after the Jog/Run. Continue for 4/5 days a week for 5 weeks span.<br/>

b) Cycling is another effective way to increase your aerobic
capabilities and to shed extra pounds quickly. If you can do an outdoor
cycling, nothing compares to it. But in today’s traffic condition it is difficult.
 Using a static cycle in home/gym, Initially cover a distance of 5 Km in 20 min
 with easy to moderate resistance available with the equipment.
Later using moderate to high resistance cover a distance
of at least 8 Km in 30 minutes. Follow stretching exercise
as mentioned after the cycling session. Continue for 4/5 days a week for 5 weeks span.<br/>
<br/>

<b>Strength and Endurance training:</b><br/>

You can start this from 2nd Phase of your Aerobic training.
Always do the Strength training after the Aerobic training and Stretching.

Aim on building strength in your back, shoulders, arms,
and abdominal muscles. Your leg muscles will get stronger through the aerobic training.<br/>

a) At home you can do push-ups and sit-ups (abdominal crunches).
Do three sets each with a repetition of 10-15.<br/>

b) Pull-up or Chin-ups is difficult to start with. If you are
able to do then do 3 sets with 5-10 repetitions. Otherwise take
someone’s help and do assisted pull-ups of 3 sets with 8 to 12 repetitions.<br/>

c) Free squats of 3 sets with 10-15 repetitions. Avoid this if you have/had knee injuries.<br/>

d) In a gym or home you can do few basic weight training like biceps-curl,
 triceps press and shoulder press. Consult a physical trainer before this workout.
Do 3 sets of each with weights ( as suggested by the trainer ) for 8-10 repetitions.<br/>

<br/>
Does an experienced trekker also need physical fitness?
Certainly! Each and every time we go to the mountain, we must have the physical
fitness level to deal with. The only advantage he or she has over a first timer
is that knowing or expecting things which are not common back in our home.
This deals purely with the mental preparation before a trek. As this is qualitative
 in nature so it is unjust to expect from the first timers.
Once experienced on ground reality, we understand and develop a sense of it.


                                 </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>

{/*card for trek cost details......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="101">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Trek Cost Details</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="101">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>
                                <h3><b>Cost of tent</b></h3>
								<br/>
								<Image src="/static/media/tent1.jpg" className='img_width_50'/>
								<br/>
                                <p style={{textAlign:'left'}}>
                                The charge of tent 1 day is  400 rupees in altitude range between 2600 Mt to 4000 Mt  <br/>
                                The charge of tent per  600 rupees in altitude range between 4000 to 6000Mt
                                </p>
                                <br/>
                                <br/>

                                <h3><b>Cost of meal providing</b></h3>
								<br/>
								<Image src="/static/media/food_charge.jpg" className='img_width_50'/>
								<br/>
                                <p style={{textAlign:'left'}}>
                                <b>Standard</b> -  Simple Tasty Food including the 3 meals, i.e breakfast,
                                lunch and dinner with morning and evening tea/coffee and biscuits<br/>
                                <b>Charges is  360 rupees per day  altitude range between 2600Mt
                                to 4000mtharges 470 rupees per day altitude range between 4000Mt  to 6000 mt</b>
                                <br/>
                                We providing  traditional food in every trek
                                Non veg  food etc charges   you pay
                                </p> 
                                <br/>
                                <br/>

                                <h3><b>Cost of sleeping bags and mettress providing</b></h3>							
								<br/>
								<Image src="/static/media/bag_charge.jpg" className='img_width_50'/>
								<br/>
                                <p style={{textAlign:'left'}}>
                                Cost of sleeping bag and mattress is 130 rupees PR day.
                                In high altitude up to 4400Mt  cost of sleeping bag is
                                170 rupee per day
                                </p>
                                <br/>
                                <br/>

                                <h3><b>Guide charges</b></h3>
								<br/>
								<Image src="/static/media/guide charges.jpg" className='img_width_50'/>
								<br/>
                                <p style={{textAlign:'left'}}>
                                Guide charges generally starting 900 to 2200.<br/>
                                According to altitude of mountain
                                Guide charges 940 rs altitude range between 2800 to  4200Mt
                                And 1200 rupee - altitude  range between 4200Mt to 6000mt
                                <br/>
                                <br/>
                                <br/>
                                Shoes rs 100 per day<br/>Water bottle -rs 30 per day
                                <br/>Wind cover- rs 45 per day
                                <br/>snow jackets- rs 75 per day
                                <br/>Stick - rs 50. Per day
                                <br/>stove -rs 90  per day
                                <br/>crampon- rs 95. Per day
                                <br/>ice axe  rs 85
                                <br/>trekking bag rs 90

                                </p>
                                <br/>
                                <br/>
                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>


            {/*card for Customization trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="102">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Trek Customization</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="102">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>
                                <h3><b>Customizing the trek is a very good option for families,
                                 students, corporate groups, and friends.Choose your trek and Contact Us</b></h3>
                                <p style={{textAlign:'left'}}>
                               At Hike2Heaven we understand that your vacation is very special to you.
                                We put into ground all of our expertise from the field,
                                unsurpassed knowledge of the sport, relentless physical effort,
                                top quality equipment and efficient planning
                                to make your travel a memory for lifetime.

                                With us, we bring along the services of lot of experts,
                                best of the locals and local service providers to make
                                your dream vacation come alive and fruitful.
                                Our efforts are to make your endeavours come true
                                without any compromises to YOUR objectives. We do
                                not want to build up constraints. Here its - YOUR service, YOUR way

<br/>
								<Image src="/static/media/cust1.jpg" className='img_width_50'/>
								<br/>
								<br/>
								<Image src="/static/media/cust2.jpg" className='img_width_50'/>
								<br/>
                                </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>



{/*card for destination travel ideas trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="103">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Destinations And Travel Ideas</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="103">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>
                                     If you’re unsure where to have your next holiday,
                                    here are all of the destinations we have covered so
                                    far on this travel website. We focus mainly on uttrakhand
                                    travel, himachal , and the Nepal. However, feel free to
                                    browse around as we also have some travel
                                    guides and tips on other destinations in india<br/><br/>


                                    <h3 style={{textAlign:'center'}}><b>WHY EXPLORE WITH HIMALAYA DESTINATION</b></h3><br/>
									<br/>
								<Image src="/static/media/dest1.jpg" className='img_width_50'/>
								<br/>

                                    Adventure with Himalaya Destination into
                                    the wildness of nature will ensure the most
                                    thrilling travel experience of your life.
                                    With varied exciting packages and various
                                    amazing tourist spots, we will make the travelers
                                     stay astounded. Traveling in the valley of world’s
                                    most charming spots will make your tour beyond your expectations. <br/><br/>

                                    We bring you best treks where one
                                    can explore the scenic beauty of nature
                                    & take away a piece of immortality.
                                    Our dedicated proficient trek experts
                                    have an experience of more than 10 decades.
                                    Our success is to fulfill the expectations &
                                    enabling to give an unique & holistic experience.
                                    You can even talk to them in order to
                                    get perfect guidance and more tips about adventure treks.<br/><br/>

                                    <b>“CLIMB THE MOUNTAINS NOT SO THE WORLD CAN SEE YOU BUT SO YOU CAN SEE THE WORLD”</b><br/><br/>

<br/>
								<Image src="/static/media/dest2.jpg" className='img_width_50'/>
								<br/>

                                    At Hike2Heaven we understand that your vacation
                                    is very special to you. We put into ground all of
                                    our expertise from the field, unsurpassed knowledge
                                    of the sport, relentless physical effort, top quality
                                    equipment and efficient planning to make your travel a memory for lifetime.<br/><br/>

                                    With us, we bring along the services of lot of experts,
                                    best of the locals and local service providers to make
                                    your dream vacation come alive and fruitful. Our efforts
                                    are to make your endeavours come true without any
                                    compromises to YOUR objectives. We do not want to build up constraints. Here its - YOUR service, YOUR way
                                </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>






{/*card for precautions trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="108">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Precautions while trekking</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="108">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>

                                 Trekking is a rewarding as well as punishing
adventurous activity that tests your physical endurance and guts.
 Certainly, there will be some challenges such as fatigue and dehydration
(especially, if you are trekking in summers) that you may encounter on your
trekking tour. But these problems are expected and manageable; the situation
 gets tricky when you encounter some unexpected difficulties. Heavy downpours,
a lurking wildlife, a surprise whiteout, or a wobbly rock at the edge of a cliff
 may pose some serious trouble in front of you. <br/>
Follow these safety tips to escape any kind of danger on your next trekking tour:<br/>

<br/>


<b>Get Updated About the Weather Forecast of the Area.</b><br/>
<Image src="/static/media/weather_prec_1.jpg" className='img_width_50'/>

Checking the weather forecast before you head out is very important.
It will help you make preparations according to the weather.
<br/>

<Image src="/static/media/weather_prec_2.jpg" className='img_width_50'/>
<br/>
If you are travelling in winters, be sure that winds will be cooler at higher
 elevations. Also, check if there are forecasts of thunderstorms, snowfall,
heavy rains etc in coming days. Avoid trekking in these days if there is any
 such update. Otherwise, make necessary preparations according to the forecast<br/>

<br/>

<b>Don’t Trek Alone:</b><br/>
<Image src="/static/media/dont_trek_alone1.jpg" className='img_width_50'/>
<br/>
Buddy system always works. When you are trekking in a group, make sure
that you don’t walk so fast that the slowest members of the group are left behind.
<br/>
<Image src="/static/media/dont_trek_alone2.jpg" className='img_width_50'/>
<br/>
 Also, take care of everyone in the group. Make sure that everyone in your group has
enough physical ability to successfully complete the trek. Another benefit of trekking
 in a group is that you have someone with you who can help in case of any emergency.
Inform someone about your trekking schedule when you are leaving.
<br/>
<br/>
<Image src="/static/media/pwt1.jpg" className='img_width_50'/>
<br/>

<b>Keep Your Trekking Essentials Handy:</b><br/>
1  Now, this is very important. Trekking essentials include your
trekking gear, emergency kit and eatables.
<br/>
2  Always carry a rain coat even if there are no forecasts of rain.
 Weather changes dramatically at higher elevations and you should be ready for that.
A good pair of footwear will make a lot of difference; carry boots which can support
 the ankles. Also, wear bright clothes.
<br/>
3  A pocket-torch or headlamp should be with you as it gets dark early
on the mountains. If you don’t have enough source of light, you may lose your trail.
<br/>
4  A Compass or maps should be with you.<br/>

5  A basic first-aid kit is necessary; also learn how to administer
first aid. This will help you in dealing with short injuries.<br/>

6  Keep a matchstick with you in case you need to light a fire.
Fire will help you to stay warm as well as it will keep wild animals away.<br/>

7  Carry a whistle; this will help you to meet other trekking members in case you get off the trail.<br/>
8  Carry eatables which can help you in getting instant energy. <br/>

9 Fruits, granola, peanut butter, bagels, power bars, fruit bars
 will work for you while on a trekking expedition.
Carry lots of water in order to avoid dehydration<br/>
<br/>
<br/>
<b> Don’t Rely Heavily on Mobile-Phones:</b>
<br/>

Mobile phones may not work in the wilderness.
Depending too much on them may leave you disappointed.
But if you are lucky enough to get network signal on the mountains,
inform someone with all the details of the location.<br/>
<br/>
<br/>
<b>Don’t Leave the Designated Trail:</b>
<br/>
Never, ever leave the specified trail.
If you are travelling and are forced to hold up due to fatigue,
make sure that you have someone who knows the trail well staying back with you;
otherwise you may get lost and might have a difficult time reuniting with the other members.
Looking for short-cuts might get you into trouble. Be sure to follow the right path for a successful trek.
<br/><br/>

<br/>
<Image src="/static/media/pwt2.jpg" className='img_width_50'/>
<br/>

<b>Pack Light:</b>
<br/>
Make sure that you don’t carry unnecessary stuff.
 Keep your backpack as light as possible. Carrying a light
backpack will help you preserve energy for the activities ahead.
But don’t overlook the essential stuff.

<br/><br/>
<b>Learn How to Survive an Animal Attack:</b>
<br/>
Learn the basics of how to escape an animal attack
 in case of a mishap. A good trekker should also have
the knowledge of understanding animal behavior.
Also wear full sleeve shirt and full pant especially at night to prevent
insect bite. Follow the instructions given by the guide,
 if there is one accompanying you.


<br/><br/>
<b> Clincher</b>:
<br/>
Trekking may be a truly rewarding experience if done
with complete preparation. Before you head for trekking, you
should also learn about altitude sickness. You should also take
 care of personal hygiene to make sure that you don’t fall sick in
 the mountains. Hope for the best but stay prepared for the worst,
 as a trekking tour may throw unexpected challenges
<br/><br/>



<b>What if You are Lost?</b>
<br/>
1 You followed all the safety tips but you were not lucky
enough to successfully complete your trek and you lost your path. Now what to do?
<br/>
2 Make a shelter for yourself so that wild animals can’t attack you.
<br/>
3 Keep yourself dry.
<br/>
4 Blow the whistle so that someone can hear you.
<br/>
5 If you see helicopters above your heads searching for you, stand at an open place so that you can be easily seen.


                                 </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>




{/*card for facilities provided trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="110">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Facilities Provided</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="110">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>
                                    Traveling  means live the unlived moment and the
                                    path to know ourself  in a better way..We
                                    Hike2Heaven provide you everlasting feeling of
                                    trekking and traveling
                                     <b>A STEP AHEAD TO HELP</b>
                                     best in class trek guides and support staff to ensure you enjoy the journey throughly
                                     SMALL GROUP SIZE
                                      average group size is only 10 -15 trekkers we deliver more
                                      personalised attention and care
                                      SAFETY highr support staff and small groups
                                      for a safer trek your itinereary is travel insured
                                      GROUP DISCOUNT We providing best facilities such
                                      <br/>
                                      1 comfertable camping<br/><br/>
                                      <Image src="/static/media/tent.jpg" className='img_width_50'/><br/><br/>
                                      2 good sleeping bag<br/><br/>
                                      <Image src="/static/media/sleeping_bag.jpg" className='img_width_50'/><br/><br/>
                                      3 Trekking bag<br/><br/>
                                      <Image src="/static/media/trekking_bag.jpg" className='img_width_50'/><br/><br/>
                                      4 healthy food<br/><br/>
                                      <Image src="/static/media/food1.jpg" className='img_width_50'/><br/><br/>
                                      5 mattress<br/><br/>
                                      <Image src="/static/media/matress.jpg" className='img_width_50'/><br/><br/>
                                      7 Trekking shoes<br/><br/>
                                       <Image src="/static/media/shoes.jpg" className='img_width_50'/><br/><br/>
                                      8 wind wear jackets<br/><br/>
                                      <Image src="/static/media/jacket.jpg" className='img_width_50'/><br/><br/>
                                      9 mountain gear<br/><br/>
                                        <Image src="/static/media/IMG_3766_numbers.jpg" className='img_width_50'/><br/><br/>
                                      10 crampon<br/><br/>
                                      <Image src="/static/media/1Crampon.jpg" className='img_width_50'/><br/><br/>
                                      11 Snow glass<br/><br/>
									  <Image src="/static/media/glass1.jpg" className='img_width_50'/><br/><br/>
                                      12 Stick<br/><br/>
                                      <Image src="/static/media/IMG_3766_numbers.jpg" className='img_width_50'/><br/><br/>
                                      13 Day bag<br/><br/>
                                      <Image src="/static/media/day_beg.jpg" className='img_width_50'/><br/><br/>
                                      14 Wind cover<br/><br/>
                                      <Image src="/static/media/wind_cover.jpg" className='img_width_50'/><br/><br/> 
                                      Etc <br/><br/>
<h3 style={{textAlign:'center'}}>Team and Facilities</h3>
<br/>

<b>Team</b>: Besides Trek Leaders, every batch has sufficient support staff including local guides, cooks and helpers .
<br/>
<b>Food</b>: Hygienic, energising and majorly vegetarian food with occasional egg dishes.
<br/>
<b>Equipment</b>: Hi-end, sturdy, well maintained sleeping tents, dining tents, toilet tents and other equipment like climbing ropes, crampons etc.
<br/>
<b>Emergency Equipment</b>: Stretcher, oxygen cylinders and well-stocked First Aid kits.
<br/>
<b>High Altitude Chambers</b> (GEMO Bag) in certain high altitude treks. (Specially in Roopkund and Stok Kangri).
<br/>
<b>Accommodation</b>: In comfortable guesthouses at base camps or in high quality tents on twin sharing basis.
<br/>
<b>Transport</b>: From pick up point to base camp in MUV or smaller vehicles for safe and comfortable rides
<br/>
<b>Trek leaders</b>: Qualified with Basic Mountaineering Course and Advanced Mountaineering Course. Each of the Trek Leaders holds Wilderness First Aid Responder Certification.
<br/>



At Hike2Heaven we understand that your vacation
is very special to you. We put into ground all of our expertise from the field,
unsurpassed knowledge of the sport, relentless physical effort,
top quality equipment and efficient planning to make your travel a memory for lifetime.






                                    </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>





{/*card for climate trek......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="111">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Climate Condition</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="111">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>


<Image src="/static/media/chrt_climate.jpg" className='img_width_50'/><br/><br/>
<b>Climate</b>
<br/>
The two major seasons of the Himalayan region are winter and summer.
During the winter the region receives the maximum snow with very icy
temperatures. Summer are quiet mild over here,
making the places over here quiet good summer holiday hideouts.
<br/>
<b>Weather</b>
In the summer in the Himalayas it can get
 as hot as 15 degrees So there for you should pack
 Autumn/Spring clothing along with some jumpers. In the
 winter in the Himalayas it gets very, very cold therefor
you should pack jumpers and pants and lost of warm stuff.
In the middle Himalayan valleys the average summer temperature
is around 25 degree Celsius while the winters are really cold.
And on the higher region of the middle Himalayas the summer temperature
is recorded at around 15 to 18 degree Celsiuswhile and  the winters are below freezing point.

If you have not been to the Himalayas before you might
 make the mistake of thinking the climate is fairly uniform
across the entire mountain range but nothing could be further
from the truth. If you’re planning a trip its key to understand
 how the weather changes throughout the year in each part of the
 Himalayas. The Indian monsoon is the main driver of climate and
the impact of the monsoon or lack of it is of key
importance for predicting the weather.
<br/>
A monsoon is best described as a seasonally
 reversing wind system. It works because during
the hot part of the year the sun warms up the earth’s
 surface causing the atmosphere to rise and as it does
 it pulls in moist air from the ocean. When the sun is no
 longer heating the surface during the winter this mechanism
reverses and a generally dry subsiding air mass dominates.
The monsoon first reaches the Himalayas in far eastern India,
 Bhutan and Nepal in early June and remains over these regions
 for the longest time. For this reason, the western Himalayas in
contrast to the eastern Himalayas are much drier and the monsoon starts later in the year.

<br/><br/>
<b>Uttarakhand </b>: <br/>
The state of Uttarakhand lies just to the east of Himachal
Pradesh and has similar climatic patterns except that monsoon
might progress a week or so earlier. The best time to visit is
 generally from March to May and from late September until November.
 <Image src="/static/media/abc.jpg" className='img_width_50'/>
<br/><br/>
<b>Himachal Pradesh</b> : 
The state of Himachal Pradesh is a land of climatic
extremes the region on the south slopes of the Himalayas bears
 the brunt of the monsoon and is wettest from July to early September.
 Heavy snow falls by the end of November and high elevation treks are
impossible until late March when the snows melt. On the northern slope of
 the Himalayas in the valleys of Lahaul and Spiti the climate is more similar
to Ladakh due to the rain shadow conditions that set up and
block monsoon moisture. See More: Treks in Himachal Pradesh.
<br/>
<Image src="/static/media/chitkul1.jpg" className='img_width_50'/><br/><br/>
<br/>
<b>Nepal</b>:<br/>
 The general trekking seasons in Nepal run from March to May
 and from late September until November. The Everest and 
Annapurna regions are of such a high altitude that winter
snows are generally light and trekking is possible from December
 to February (See – Weather of Everest). The north side of the
Himalayas which include; the Mustang and Dolpo regions, lie in
 somewhat of a rain shadow and monsoon moisture is more limited.
If you want to trek in Nepal in July and August these are the best regions.
<br/>
<Image src="/static/media/harsil.jpg" className='img_width_50'/><br/><br/>
<br/><br/>
<b>Tibet</b>: 
<br/>
Tibet lies in the rain shadow of the Himalayas and is quite dry
during the summer months. Winters have limited snow but are quite cold.
The best time to visit is from April until early October.
<br/><br/>
<b>Ladakh</b> :
<br/>
 Ladakh is almost always dry as the Himalayas block monsoon
progression and create a rain shadow. High altitude and dry
conditions result in extremely cold conditions in the winter.
Temperatures in Leh can reach -35 °C (-31 °F) and up to 35 °C (95 °F) in the summer.
The best time to visit is from June to September. Sometime the snows on
 the high peaks like Stok Kangri preclude
trekking all the way to early July.


                                    </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>




{/*card for Things to carry......................................................................*/}
           <Card className="all_blogs_card">
            <Accordion.Toggle as={Card.Header} eventKey="115">
              <Container>
                   <Row className="all_blogs_row">
                    <Col style={{textTransform:'none',fontStyle:'none',color:'rgb(69, 141, 0)'}}>
                    Things To Carry</Col>
                    </Row>
                 </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="115">
               <Card.Body>

                    <Container className='all_blogs_container'>
                       <Row className="all_blogs_row">
                        <Col style={{fontStyle:'none',fontWeight:'600',fontSize:'1rem',fontVariant: 'proportional-width',color:'rgba(0,0,0,.9)'}}>
                             <div style={{textAlign:'center'}}>
                             <span>

                                <p style={{textAlign:'left'}}>
                                    <h3 style={{textAlign:'center'}}>Things To Carry</h3>
									Micro fleece pullover, full sleeve T shirt<br/>
									Water resistant trekking pants - 2<br/>
									Windproof/water resistant outer jacket<br/>
									Down jacket with min 600 fill power rating<br/>
									Thick Fleece / Full-sleeve Woollen sweater<br/>
									Thermal inner wear<br/>
									Woollen cap , Inner fleece gloves, Water proof gloves<br/>
									Thick woollen socks and regular socks (4 – 5 pairs)<br/>
									Waterproof trekking shoes, camp shoes<br/>
									Raincoat / Poncho<br/>
									A weight towel<br/>
									Sturdy walking stick / Trekking pole<br/>
									Sunscreen Lotion, Lip Balm, Cap<br/>
									Torch / Flashlight (with extra batteries)<br/>
									Personal medications and toiletries<br/>
									Small day pack<br/><br/>
									
Imagine yourself up on the mountain, looking over this 
stunning snow-covered landscape. You are so mesmerised that 
you decide to set up your first camp of the trek right here and 
get up in the morning to this beautiful view. You start unpacking your gear, 
setting up your tent and then taking your things inside to relax for the day. 
That's when you realise you forgot your night light or your forgot your thermals 
or you have nothing to cook those ready to cook delicious food you bought! 
How would you feel when you are in the middle of nowhere surrounded by 
nothing but snow and you don't have something so important?
<br/>
<br/>
Well, don't you worry traveller, we've got your back! We may not 
control the weather on the top of the mountains, but we can surely 
help you to be prepared and carry all the necessary things on you. 
Right from important things to carry to basic things which makes a 
huge difference when you are climbing through the snow. Be as excited 
as you want for your adventure trip, you won't have to worry about things to carry in your backpack!

We are giving you a checklist for things to carry while 
trekking that will make you snow trek ready right away!
<br/>
<br/>




<h4 style={{textAlign:'center'}}>Let’s start with all the necessary things to carry while trekking on your next snow trek adventure.</h4>
<br/>
<br/>
1. Trekking Shoes<br/>
<br/><br/>
<Image src="/static/media/shoes.jpg" className='img_width_50'/><br/>
<br/><br/>
You should carry waterproof trekking shoes which have a good grip. 
You can travel in your sports shoes till the base camp but once you 
start your trek, you must change into your trekking shoes. 
Investing in good quality will be worth. 
<br/><br/>

2. Backpack with Raincover

<br/><br/>
<Image src="/static/media/bp1.jpg" className='img_width_50'/><br/>
<br/><br/>
<Image src="/static/media/bp2.jpg" className='img_width_50'/><br/>
<br/><br/>

While buying your backpack, you should check its straps, 
some side pockets and departments are provided and if 
it has a supporting frame fitted into it. 
This will help you organize your things in it. Also, 
depending on how long you trek, you may buy 40 - 60 litres of a backpack.
<br/><br/>

3. Walking Pole<br/>

<br/><br/>
<Image src="/static/media/stick.jpg" className='img_width_50'/><br/>
<br/><br/>
If your trek organiser provides you 
with a walking stick, great! But you 
should still carry at least one, just in case they don’t.

<br/><br/>
4. Head Torch<br/>

<br/><br/>
<Image src="/static/media/tourch.jpg" className='img_width_50'/><br/> 
<br/><br/>
Again, something your trek organizer should 
take care of but carrying a head torch of your 
own will spare you the discomfort of the used one.
<br/><br/>

 5.Water Bottle/Thermos<br/>
<br/><br/>
<Image src="/static/media/bottle.jpg" className='img_width_50'/><br/>
<br/><br/>
One of the most important things is Water bottle, which will 
sustain in the harsh conditions too. You can also carry Thermos 
along with your water bottle to carry hot water. Carrying at least 
two water bottle of a litre each and a thermos will add to your convenience
Thermostat for snow trek
<br/><br/>



6. Snacks<br/><br/>
Protein bar makes a great snack during snow trek
<br/><br/>
<Image src="/static/media/snacks.jpg" className='img_width_50'/><br/>
<br/><br/>
Light snacks that may not need fire or water to cook is 
something you should definitely pack in your backpack. 
Packed in small reusable airtight bags will also help you 
travel green. If you are carrying your stove, pack ready 
to cook snacks like instant Upma, Poha, Oats or some soups

<br/><br/>


7. Personal Medical Kit<br/>
<br/><br/>
<Image src="/static/media/medical.jpg" className='img_width_50'/><br/>
<br/><br/>
When we say Personal, meaning all medicines you are 
prescribed by your doctor or meds or supplements that 
you need every day. While packing all the snow-trek-essentials, 
these are a few of the things to carry while 
trekking which are usually forgotten by many travellers. 

<br/><br/>

8. Day Bag 
Day backpack <br/>

<br/><br/>
<Image src="/static/media/day_beg.jpg" className='img_width_50'/><br/>
<br/><br/>
A day bag, not more than 20 litres, is only needed when you 
offload your luggage while trekking. Carry the immediate things 
that you may need, like water bottle, medicines and first aid in 
your day bag. Check with your organizer about the luggage offloading beforehand.

<br/><br/>
10. Headgears <br/><br/>
Headgears and head protection items

<br/><br/>
<Image src="/static/media/gear.jpg" className='img_width_50'/><br/>
<br/><br/>
Carry your woollen caps, sun caps, woollen bandanas to cover 
your face and neck and dark sunglasses that covers your eyes properly.

<br/><br/>

11. Comfortable & Necessary Clothing <br/>
<br/>
Comfortable and necessary clothing for a snow trek

<br/><br/>
<Image src="/static/media/jacket.jpg" className='img_width_50'/><br/>
<br/><br/>
Pack only such clothing that you are comfortable in. 
Don't carry something out of trend or something that 
looks fancy without making sure that you are comfortable in it.

<br/><br/>

<b>Must carry clothing are<br/>
- Trekking pants and t-shirts<br/>
- Fleece tees and jacket<br/>
- Windproof and waterproof, padded jacket <br/>
- Poncho<br/>
- Thermal Inners<br/>
</b>
<br/><br/>
12. Footwear & Feet Protection<br/>
socks and other items for feet protection


<br/><br/>
<Image src="/static/media/shock.jpg" className='img_width_50'/><br/>
<br/><br/>
As mentioned before good quality, well-fitted trekking shoes, 
extra pair of floaters, cotton as well as woollen socks are few 
of the must-have things to carry while trekking. 
Extra padding for shoe bite prone areas of your feet. 

<br/><br/>

14. Cutlery<br/>
Cutlery for snow trek

<br/><br/>

Carry your own travel-friendly coffee mug, a spoon and fork 
and travel-friendly lunch box as it has many benefits. 
While cooking on your own it helps to clean and carry it along 
to your next stop, not creating any waste. So it's good for the 
environment. And if you are travelling in a group, it is always 
very hygienic instead of sharing your coffee mug and lunch box. 
<br/><br/>

15. First Aid Kit <br/>

<br/>
<Image src="/static/media/medical.jpg" className='img_width_50'/><br/>
<br/><br/>
Medicines for AMS, Motion Sickness, Antacids, 
Diarrhea, Pain killers, Fever, Allergies if any, Knee and back support, 
Antifungal powder, Bandages, energy drink powder, instant pain relief spray,
bandages and ointment for shoe bites, etc. are few of 
the medicines you should consider carrying in your first aid kit.

<br/><br/>

The Right Way To Pack a Backpack
Right way to pack a backpack for a snow trek

<br/><br/>
<Image src="/static/media/bp1.jpg" className='img_width_50'/><br/>
<br/><br/>
When a backpack is smartly packed, not only it will carry more gears 
and clothing but it will also help you make your trek hassle-free. 
Be it perfectly placed items, clever choices of snacks and trekking gears,
this will play a major part in determining your experience of a snow trek. 





                                    </p>
                                <br/>
                                <br/>


                             </span>
                             </div>
                         </Col>
                      </Row>
                    </Container>

              </Card.Body>
            </Accordion.Collapse>
            </Card>



<MyVerticallyCenteredModal1
        show={modalShow}
        data={content}
        onHide={() => setModalShow(false)}
      />




   </Accordion>
       </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;