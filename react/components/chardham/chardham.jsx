import React, { Component } from "react";
import axios from 'axios';
import './chardham.css';
import {Carousel,Container,Row,Col,Image} from 'react-bootstrap';
import Form_component from '../form_component/form_component'
import Youtube_player from '../youtube/youtube';

class Chardham extends React.Component {
render() {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
let videoId = 'KM67Q8c56lc';
let height = '390';
let width = '100%';
    return (

<div>
<div className='div_static_back_chardham'>
</div>
<h2 className="all_blogs_heading" style={{marginTop:'30px',marginBottom:'30px'}}>Char-Dham with <span style={{color:'#ffc107'}}>Hike2Heaven</span></h2>
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

Nestled among the serene heights of the great Himalayas are four pilgrim-destinations namely Yamunotri, Gangotri, Kedarnath, and Badrinath, collectively known as Char Dham.

These pilgrimage centers draw the maximum numbers of pilgrims each year, thus becoming the most important hubs of religious travel in the whole of Northern India.
Traditionally, the pilgrimage begins from the West and ends in the East. Thus, the Char Dham Yatra commences from Yamunotri, then proceeding to Gangotri and finally to Kedarnath and Badrinath.
Each of these four sites is devoted to a specific deity.
<br/><br/>
<b>Chardham with panchprayag</b>

<br/>
Yamnotri
<br/>
Gangotri
<br/>
Kedarnath
<br/>
Badrinath
<br/>

<b>Chardham with included these destination</b>
<br/>
Budakedar
<br/>
Panch prayag
<br/>
Tungnath
<br/>
Kalpeshwar
<br/>
Dhyan Badri
<br/>
Omkareshwar
<br/>
Gopinath
<br/>
Mana village vyas gufa Vasudhara waterfall
<br/>
Charnpadhuka neelkant base
<br/>
Bhairav nath temple kedarnath
<br/>
Pandukeswar temple
<br/>
Kartik swami
<br/>
Hemkund sahib / lopal mandir
<br/>
Karn mandir
<br/>
Bavishya badri
</p>
    </Col>

  </Row>
  
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
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/chardham/chardham_1.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/chardham/chardham_2.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/chardham/chardham_3.jpg"/>
    </Col>

    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/chardham/chardham_4.jpg" />
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>
      <Image className='h_w_img' src="/static/media/chardham/chardham_5.jpg"/>
    </Col>
    <Col className='col_mar' xs={12} sm={12} md={4} lg={4}>

    </Col>
    </Row>

<div className="row">
  <div className="col-lg-5 col-md-6 col-sm-12">
<h5>Package</h5>
Group cost for 4 people<br/>
Cost per person rs 32800<br/>
32800*4<br/>
2000 security and other<br/>
14day 12night<br/>
Explore The Places with New Experience.....<br/><br/>
</div>
<div className="col-lg-5 col-md-6 col-sm-12">
<h5>Included</h5>
Transportation<br/>
Meal per day<br/>
Hotel and camping<br/>
</div>
</div>
</Container>

<Container style={{padding:'1%'}}>
  <Row>
    <Col style={{textAlign:'left'}}>
    <p style={{fontSize:'1rem', fontWeight:'500',lineHeight: '30px',whiteSpace:'pre-line'}}>
<b>Yamunotri</b>
<br/>
Yamunotri is dedicated to the Goddess Yamuna who goes along the pilgrims to the high altitudes of the picturesque Rawai Valley. It is believed that a bath in the waters of the Yamuna protects the devotee from untimely death.
<br/>
<br/>
<b>Gangotri</b>
<br/>
 Gangotri is dedicated to the Goddess Ganga. The shrine overlooks the River Bhagirathi, another name of River Ganga – the name having been derived from the myth of the ancient King Bhagirath’s penance that succeeded in bringing her upon the earth from the heaven.
<br/><br/>
<b>Kedarnath</b>
<br/>
Kedarnath is dedicated to Lord Shiva and is also a part of the Panch Kedar. It is the northernmost Jyotirlinga and is close to the source of the holy River Mandakini.
<br/><br/>

<b>Badrinath</b>
<br/>
LEGEND BEHIND THE BADRINATH DHAM
<br/>
<b>BADRIKAASHRAM</b>
<br/>
Badrinath being one of the most legendary Temples, it has numerous mythical tales associated with it. According to one mythological tale, Lord Vishnu had performed rigorous atonement at this place. During his intense meditation, he was unaware about the severe weather conditions. To protect him from the scorching heat of the sun, his spouse Goddess Lakshmi acquired the shape of Badri tree and spread over him. Witnessing this, Lord Vishnu was pleased by her devotion and hence he named the spot after her as Badrikashram.
<br/>

<b>LORD NARAYANAS DESIRE TO MEDITATE IN BADRINATH</b><br/>
Another legend states that, Lord Shiva and Goddess Parvati were once performing tapasya in Badrinath. It was then Lord Vishnu came in disguise as a small boy and disrupted them, by crying loudly. On hearing that Goddesses Parvati asked him the reason behind his mournful behavior, to which he replied that he wanted to meditate in Badrinath. Shiva and Parvati, on discovering Lord Narayan in disguise, left Badrinath and moved to Kedarnath.

<br/><br/>
<b>TALE OF NAR AND NARAYANA</b>

Badrinath Dham is also related to the tale of the two sons of Dharma, Nar and Narayana who wished to setup their hermitage and expand their religious base amidst the pious Himalayas. Going by the legends, during their quest to find a suitable place for their hermitage they led to a chanced discovery of the four sites of Panch Badri, namely Dhyan Badri, Yog Badri , Bridha Badri and Bhavishya Badri. Finally they came across a spot which was blessed with two fascinating cold and hot springs behind river Alaknanda. They were extremely overjoyed on finding this place and thus they named this place as Badri Vishal, this is how Badrinath came into being.
<br/><br/>


<b>PANDAVA'S ASCENT TO SWARGAROHINI VIA BADRINATH </b>
<br/>
It is also said that the Pandavas of the holy epic Mahabharata climbed via 'Swargarohini, popularly known as the ascent to heaven, and Mana town, north of Badrinath while on their route to heaven.
Chardham Uttarakhand
<br/><br/>

<b>THE ORIGIN OF RIVER ALAKNANDA</b><br/>
Last but not the least, there is another great legendary tale, which is associated to Badrinath. Legends state that the holiest and curse reliever, river Ganges had granted the request of Bhagiratha, for relieving the humanity from the curse of sufferings and sins. While ascending to earth, the intensity of river Ganges was such that it could have immersed the entire earth under its waters. To release the earth from such unbearable consequences, Lord Shiva bore her onto his tresses and ultimately, the river Ganges got divided into twelve holy rivers and river Alaknanda, which flows past the sacred Badrinath Temple, was one of them.
<br/><br/>


<b>WHAT TO SEE IN BADRINATH DHAM?</b>
<br/>
Tourist Attractions near Badrinath
<br/>
<b>BADRINATH TEMPLE</b>
<br/>
Ancient texts hold this abode of Lord Vishnu at a very high esteem, stating - "there are many spots of pilgrimage in the heaven, earth and the world, but there has been none equal to Badri, nor shall there be." At the height of 3,133 meters, it stands proud with its rich past along the banks of Alaknanda River. Regarded as the most important temple of Vishnu, the Badrinath shrine is said to be established by Adi Shankaracharya.

He found the Saligram idol of Lord Badri immersed in the waters of Alaknanda and installed it in a cave near the Tapt Kund.
It was in the 16th century that a Garhwal King got a temple erected to house the statue of the God. The present structure is the result of plenty of restorations the temple has undergone due to damages caused by avalanches and earthquakes. Lord Vishnu can be worshipped in a black stone idol sitting in a meditative pose surrounded by idols of other gods like Nar, Narayana, Narad, Ganesha, Garud and Kuber. In the winter season, the idol of Lord Badri is shifted to Yogadhyan Badri in Pandukeshwar (Chamoli district).

<br/><br/>

<b>TAPT KUND</b>
<br/>
Just below the temple, there is a natural thermal spring which is believed to be infused with therapeutic properties. A dip in the holy and hot waters of the Kund is necessary before a devotee visits the sacred shrine of Badrinath. Near the Tapt Kund also lie five boulders which are, as per mythology, Narad, Narsingh, Varah, Garur and Markanday.
Brahma Kapal
<br/><br/>

<b>BRAHMA KAPAL</b>
<br/>
It is a flat platform by the banks of Alaknanda 100 meters north of the temple. Performing propitiating rites for the deceased family members, it is believed, would free them from the vicious circle of life and death.
Neelkanth Peak

<br/><br/>
<b>NEELKANTH PEAK</b>
<br/>
Known as the 'Queen of Garhwal', Neelkanth Peak, standing with its gigantic height of 6,597 meter (approx.), sets a great background to the Badrinath shrine. Named after Lord Shiva, the splendour of the snow-covered peak gets augmented as it receives the first rays of the Sun at the crack of dawn.
Mata Murti Mandir

<br/><br/>
<b>MATA MURTI MANDIR</b>
<br/>
It is located 3 km from the Badrinath temple, on the banks of Alaknanda River. Mata Murti temple is believed to be the mother of Nara and Narayan, the twin-brother avatar (incarnation) of Lord Vishnu. It was the relentless prayers of Mata Murti that persuaded Lord Vishnu to take birth from her womb. Every year, in the month of September, pilgrims throng to attend the Mata Murti ka Mela (fair).
Charanpaduka

<br/><br/>

<b>CHARANPADUKA</b>
<br/>
Strewn with boulders and caves, a steep climb of about 3 km from the Badrinath town will take you to Charanpaduka. It is a rock which is believed to be imprinted with the footprints of Lord Vishnu, as he descended on earth from Vaikunth (his heavenly abode).
Sheshnetra

<br/><br/>
<b>SHESHNETRA</b>
<br/>
Between two seasonal lakes, on the opposite bank of Alaknanda, there exists a big rock which gives the impression of Shesh Nag, the legendary snake of Lord Vishnu. The Sheshnetra has a natural mark which looks like an eye of the Shesh Nag. Located 1.5 km from the temple, the serpent is believed to be guarding the sacred shrine of Badrinath.
Vasudhara Falls
<br/><br/>
<b>VASUDHARA FALLS</b>
<br/>
A 122 meters high beautiful waterfall positioned in the tranquil surroundings of Himalayas can be reached by covering 3 km (up to Mana village) by road and trekking the other 6 km on foot.
</p>
<br/>
    </Col>
  </Row>
</Container>

</div>
    )


}
}



export default Chardham;