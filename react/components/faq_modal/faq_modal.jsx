import React, { Component } from "react";
import './faq_modal.css'
import $ from 'jquery'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Modal,Container,Row,Col,Accordion,Card,Image } from 'react-bootstrap';

var faq_data=[
{1:'What is camping trek',
2:'Camping treks are treks in which you spend your night in tents. Tents are pitched in a location which meets the basic requirements of a camping ground like source of water, safety from rocakfall, flash floods, etc, good views to mention a few.'
},
{1:'What is trekking',
2:'Trekking is an interesting walking holidays; adventurous journey to discover the diversity of nature and culture by foot on hills or High Mountain areas is called trekking.'
},
{1:'Why should I go to the Himalayas',
2:'A Renowned Spiritual Center To the spiritually inclined, the Himalayas is considered a sacred region. There are sacred places, temples, ashrams, and pilgrimage routes from one end to the other, including the foothill.'
},
{1:'What is the best time for trekking',
2:'The best time for trekking can be subjective to your taste. Each season brings a different experience to various aspects of the journey. Spring (March, April, May) are ideal for forested journeys as entire forests are covered with rhododendrons blooming in shades of red, pink, and white. The rainy seasons of June, July and August are often avoided as the chances of landslide increases drastically in the Himalayas. The autumn months of September to November are favored by trekkers where in addition to a lovely trek they get to enjoy the vibrant festivals of Dashain and Tihar. During the winter months from December and February, the temperature in the Himalayas decreases drastically and treks into the mountains are often avoided during the season.'
},
{1:'What kind of clothes are needed for trekking',
2:'The clothes needed for trekking entirely depends on the destination of the trek and the season of your trek. If you are heading to the Himalayas, regardless of the season, make sure to have warm clothes including thermals, down jackets, and woolen clothes. However, if you are journeying to the Terai cities temperatures soar during the summer months and cotton clothes are ideal. During the winter months, the Terai regions experience a lot of fogs so pack a jacket and some woolen clothes. The hilly regions experience moderate temperature and a couple of layers is enough to get you through your travel. Make sure the clothing you wear is comfortable and doesn’t restrict mobility.'
},
{1:'What type of shoes should I have',
2:'Sports shoes are a must for any treks you undertake. If you expect days of walking through the hilly terrain make sure you carry your hiking boots. If you do not expect long days of walking, sports shoes will suffice but make sure they are durable and comfortable.'
},
{1:'What problems may arise while trekking at higher altitudes',
2:'As our itineraries are constructed by keeping the need of acclimatization, we try and make sure your transition to high altitudes will be an easy one. At times you can suffer from Acute Mountain Sickness (AMS) which causes headaches, lack of appetite, dizziness, and labored breathing upon exertion. These symptoms will naturally fade away as you get used to the rising altitudes. However, you also have to maintain a steady pace and acclimatize properly. Diamox can also help you to prevent and decrease the symptoms of altitude sickness.'
},
{1:'How difficult is the trekking',
2:'The difficulty of our trekking depends on where you want to trek and how long you want to go. The shorter Trekking tend to be easier while the longer ones require some physical fitness. Be prepared for some steep trails leading to amazing views. The pace at which you hike is up to you. We have friendly and dependable porters to assist you with your personal gear.'
},
{1:'Will we have private rooms and bathrooms',
2:'Private rooms are available in most Lodges or tea houses except for those at very high altitudes. Most bathrooms are shared. On our lodge treks we also provide someone to clean all bathroom facilities for our groups. Our lodge treks also include bed and pillow covers.'
},
{1:'What are the fitness requirements',
2:'Physical fitness is secondary things, If your mentally will power is very strong then you can do any track very easily. Each trek has its own fitness requirements, which you can see in the “Get yourself fit” section on the relevant trek page. You will need to develop your fitness to meet these criteria before you start your trek.'
},
{1:"What’s included in the trek fee",
2:"Each trek is unique and may include different things in the trek fee. Accommodation (e.g. tents and/or lodges)\\nAll meals (simple, nutritious and vegetarian)\\nExpert trek leaders and support team\\nTrekking and safety equipment"
},
{1:"What kind of food do you provide",
2:"We provide simple, delicious, nutritious vegetarian meals on all days of the trek.\\nStandard -  Simple Tasty Food including the 3 meals, i.e breakfast, lunch and dinner with morning and evening tea/coffee and biscuits\\nWe providing  traditional food in every trek\\nWe provide veg and non veg  both item.\\nLuxary - All the 3 meals included in standard menu + evening snacks, hot drinks and sweet dishes every day, added with chocolates, biscuits and dry fruits for the day's walk."
},
{1:"What if I want to offload my personal load",
2:"We promote carrying your rucksack by yourself. However, if you are not in a position to carry it by yourself, we may hire you a porter to do so. Any such requests should come before the start of the trek. Else, in the middle of the trek, we cannot assure you a porter to carry your bag, as its not guaranteed to get the porters on the way. The charges will depend upon the number of bags to be offloaded and needs to be consulted prior to the beginning of the trek."
},
{1:"What if I get injured in middle of the trek",
2:"Such situations will be treated as emergency and we will act according to the seriousness of it. While sometimes we may require to give you full attention, affecting the entire team. While on other occasions, it might be a minor injury and treated accordingly, with importance. If we require to send you back, we will accompany a helper with you, who will take care of you and take you down to safety. The entire team is expected to cooperate fully on such occasions. We will be abided by our Terms of Travel for such situation, and you are expected to read it before you join one of our fixed departures."
},
{1:"What about the transportation cost before and after trek",
2:"Check the inclusion and exclusion tab to see if transportation is included or not. Usually its not. We may arrange a vehicle for you, the cost of which is to be shared by you or the group using the vehicle on actual basis."
},
{1:"Can I drink alcohol on trek",
2:"Drinking alcohol is not advisable on a High Altitude Trek. Alcohol dehydrates our body and in high altitude dehydration becomes a big cause for Altitude Sickness. We suggest and DO NOT allow having alcohol, specially while still gaining altitude. On descending and after getting ourselves down to a safe altitude, we can have it."
},
{1:"Is trekking a climbing",
2:"Basically there is a difference in trekking, climbing and hiking.\\nTechnically, a hiking is a short walking adventure that finishes within the same day without continuing an overnight stay. While trekking is a multiple-day walking activity with overnight stays along the way. Both involve walking on the foot trail that may have varying difficulty level.\\nClimbing is a completely different adventure. It is a more technical activity that requires you to have the skills of climbing mountains. While trekking involves walking activity, climbing involves more technical aspects in the mountains. You need the help of a lot of climbing props like rope, ladder, ice axe, crampons, etc. for a climbing adventure."
},
{1:"Himalayan Treks For Beginners",
2:"1. Brahmatal trek\\n2. Chopta tungnath\\n3. Bedni ali bugiyal\\n4. Panwali kantha\\n5. Pindari\\n6. Dayara bugiyal\\n7. Rara lake\\n8. Neelkant base.\\n9. kedarnath base"
},
{1:"Most difficult trek",
2:"1. Panpatiya col\\n2. Cholapass\\n3. Auden's col\\n4. Khathling glacier\\n5. Roti pass\\n6. Swargarohini satopant"
},
{1:"Moderate trek",
2:"1. Roopkund\\n2. Kauri pass\\n3. Trishul base\\n4. Kagbhusandi Tal\\n5. Pindari with kafani glacier \\n6. Everest base\\n7. Iceland peak base"
},
{1:"Best winter trek",
2:"Winter in the Himalayas brings diamond ice covering on the beautiful mountains. Hiking on these mountains is living in the present while creating your footprints, that mark your presence in the gone moment. Though these footprints are mortal, the sensation of the snow on our feet remains forever with us. The breeze burns our nose, leaves our body to shivering, the trail shines hard on the eyes, yet all this is negligible in front of the overwhelming beauty of the winter world.\\n1. Kauri pass\\n2. Pindari\\n3. Brahmatal trek\\n4. Chopta tungnath\\n5. Bedni ali bugiyal\\n6. Panwali kantha\\n7. Mandani Velly trek"
},
{1:"Why should I choose Mountains-Rover",
2:"We Hike2Heaven provide you everlasting feeling of trekking and traveling\\nWe providing best facilities such as : \\n1. Comfortable camping facilities\\nTeam and Facilities\\nTeam: Besides Trek Leaders, every batch has sufficient support staff including local guides, cooks and helpers.\\n2. Food: Hygienic, energising and majorly vegetarian food with occasional egg dishes.\\n3. Equipment: Hi-end, sturdy, well maintained sleeping tents, dining tents, toilet tents and other equipment like climbing ropes, crampons etc.\\n4. Emergency Equipment: Stretcher, oxygen cylinders and well-stocked First Aid kits.\\n5. High Altitude Chambers (GEMO Bag) in certain high altitude treks. (Specially in Roopkund and Stok Kangri).\\n6. Accommodation: In comfortable guesthouses at base camps or in high quality tents on twin sharing basis.\\n7. Transport: From pick up point to base camp in MUV or smaller vehicles for safe and comfortable rides\\n8. Trek leaders: Qualified with Basic Mountaineering Course and Advanced Mountaineering Course."
}
]

var faq_data1=[
{1:'What is camping trek',
2:'Camping treks are treks in which you spend your night in tents. Tents are pitched in a location which meets the basic requirements of a camping ground like source of water, safety from rocakfall, flash floods, etc, good views to mention a few.'
},
{1:'What is trekking',
2:'Trekking is an interesting walking holidays; adventurous journey to discover the diversity of nature and culture by foot on hills or High Mountain areas is called trekking.'
},
{1:'Why should I go to the Himalayas',
2:'A Renowned Spiritual Center To the spiritually inclined, the Himalayas is considered a sacred region. There are sacred places, temples, ashrams, and pilgrimage routes from one end to the other, including the foothill.'
},
{1:'What is the best time for trekking',
2:'The best time for trekking can be subjective to your taste. Each season brings a different experience to various aspects of the journey. Spring (March, April, May) are ideal for forested journeys as entire forests are covered with rhododendrons blooming in shades of red, pink, and white. The rainy seasons of June, July and August are often avoided as the chances of landslide increases drastically in the Himalayas. The autumn months of September to November are favored by trekkers where in addition to a lovely trek they get to enjoy the vibrant festivals of Dashain and Tihar. During the winter months from December and February, the temperature in the Himalayas decreases drastically and treks into the mountains are often avoided during the season.'
},
{1:'What kind of clothes are needed for trekking',
2:'The clothes needed for trekking entirely depends on the destination of the trek and the season of your trek. If you are heading to the Himalayas, regardless of the season, make sure to have warm clothes including thermals, down jackets, and woolen clothes. However, if you are journeying to the Terai cities temperatures soar during the summer months and cotton clothes are ideal. During the winter months, the Terai regions experience a lot of fogs so pack a jacket and some woolen clothes. The hilly regions experience moderate temperature and a couple of layers is enough to get you through your travel. Make sure the clothing you wear is comfortable and doesn’t restrict mobility.'
},
{1:'What type of shoes should I have',
2:'Sports shoes are a must for any treks you undertake. If you expect days of walking through the hilly terrain make sure you carry your hiking boots. If you do not expect long days of walking, sports shoes will suffice but make sure they are durable and comfortable.'
},
{1:'What problems may arise while trekking at higher altitudes',
2:'As our itineraries are constructed by keeping the need of acclimatization, we try and make sure your transition to high altitudes will be an easy one. At times you can suffer from Acute Mountain Sickness (AMS) which causes headaches, lack of appetite, dizziness, and labored breathing upon exertion. These symptoms will naturally fade away as you get used to the rising altitudes. However, you also have to maintain a steady pace and acclimatize properly. Diamox can also help you to prevent and decrease the symptoms of altitude sickness.'
},
{1:'How difficult is the trekking',
2:'The difficulty of our trekking depends on where you want to trek and how long you want to go. The shorter Trekking tend to be easier while the longer ones require some physical fitness. Be prepared for some steep trails leading to amazing views. The pace at which you hike is up to you. We have friendly and dependable porters to assist you with your personal gear.'
}
]

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
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem'}}>
          {props.data[1]+' ?'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p id='replace_br' style={{color:'black',fontSize:'1.2rem',fontWeight:'600'}}>
          {props.data[2]}
        </p>
      </Modal.Body>
      {/*<Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:'#ffc107',color:'black'}}>Close</Button>
      </Modal.Footer>*/}
    </Modal>
  );
}

function Faq_modal() {
  const [modalShow, setModalShow] = React.useState(false);
  const [content, setContent] = React.useState({1:'',2:''});
  const [dataToShow, setDataToShow] = React.useState(
  faq_data1.map((data, index) => (
        <div className="col-md-6">
        <div data-aos="fade-up" data-aos-delay="100" className="home-faq-wrapper" data-toggle="modal" data-target="#faq-60692" onClick={() => {setModalShow(true);setContent(data);}}>{data[1]+' ?'}<i className="fa fa-plus" style={{float:'right'}}></i></div>
        </div>
    ))

  );

   const mounted = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
    mounted.current = true;
  } else if(modalShow!=false){
    document.getElementById('replace_br').innerHTML=document.getElementById('replace_br').innerHTML.replace(/\\n/g,"<br />")
  }

    })
 let data=faq_data.map((data, index) => (
        <div className="col-md-6">
        <div data-aos="fade-up" data-aos-delay="100" className="home-faq-wrapper" data-toggle="modal" data-target="#faq-60692" onClick={() => {setModalShow(true);setContent(data);}}>{data[1]+' ?'}<i className="fa fa-plus" style={{float:'right'}}></i></div>
        </div>
    ))

    let data1=faq_data1.map((data, index) => (
        <div className="col-md-6">
        <div data-aos="fade-up" data-aos-delay="100" className="home-faq-wrapper" data-toggle="modal" data-target="#faq-60692" onClick={() => {setModalShow(true);setContent(data);}}>{data[1]+' ?'}<i className="fa fa-plus" style={{float:'right'}}></i></div>
        </div>
    ))

  return (
    <div className='faq_container'>
 <section style={{background:'none'}} className="section-bg home-faqs-section page-section text-center section-bg-grey page-section-arrow-grey index_3000">
<div className="container container_max_width" style={{position: 'relative',paddingTop:'20px',paddingBottom:'1px',background: 'linear-gradient(to right, rgb(255, 204, 3) 0%, rgb(254, 221, 74) 66%, rgb(254, 227, 91) 75%, rgb(253, 238, 121) 100%)'}}>
 <div class="ribbon ribbon-top-left"><span>Hike2Heaven</span>
	</div>
 
<br/>
<h2 className="section-header">FAQs &nbsp;<i className="fa fa-question-circle" aria-hidden="true"></i></h2>
<br/>
<h4>You Might Have These Questions In Mind.</h4>
<div className="home-faqs-container text-left" style={{paddingTop:'10px'}}>
    <div className="row">
 {dataToShow}
 <div style={{textAlign:'center',marginTop:'40px', width:'100%'}}>
 <i className="fas fa-2x fa-arrow-circle-down" style={{cursor:'pointer',marginRight:'20px',color:'#28a745'}} onClick={() => {setDataToShow(data);}}></i>
 <i className="fas fa-2x fa-arrow-circle-up" style={{cursor:'pointer',color:'#28a745'}} onClick={() => {setDataToShow(data1);}}></i>
 </div>
</div>
</div>
</div>
</section>
      <MyVerticallyCenteredModal
        show={modalShow} 
        data={content}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Faq_modal;