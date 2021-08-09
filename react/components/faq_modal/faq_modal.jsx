import React, { Component } from "react";
import './faq_modal.css'
import '../../../tourism_project/static/assets/js/main.js';
import $ from 'jquery'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Modal,Container,Row,Col,Card,Image } from 'react-bootstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function Faq_modal() {
  return (
    <div className='faq_container'>
 <section style={{background:'none'}} className="section-bg home-faqs-section text-center section-bg-grey page-section-arrow-grey index_3000">
<div className="faq-wrap">
 {/* <div class="ribbon ribbon-top-left"><span>Hike2Heaven</span>
	</div> */}
 <div className="container">
<br/>
<h2 className="section-header">FAQs &nbsp;<i className="fa fa-question-circle" aria-hidden="true"></i></h2>
<br/>
<h5>You Might Have These Questions In Mind.</h5>
<div className="home-faqs-container text-left" style={{paddingTop:'10px'}}>
    <div className="row">
        <div className="col-md-6 col-sm-12">
      <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is camping trek ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Camping treks are treks in which you spend your night in tents. Tents are pitched in a location which meets the basic requirements of a camping ground like source of water, safety from rocakfall, flash floods, etc, good views to mention a few.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is trekking ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Trekking is an interesting walking holidays; adventurous journey to discover the diversity of nature and culture by foot on hills or High Mountain areas is called trekking.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Why should I go to the Himalayas ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>A Renowned Spiritual Center To the spiritually inclined, the Himalayas is considered a sacred region. There are sacred places, temples, ashrams, and pilgrimage routes from one end to the other, including the foothill.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is the best time for trekking ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>The best time for trekking can be subjective to your taste. Each season brings a different experience to various aspects of the journey.</p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div>
            <div className="col-md-6 col-sm-12">
              <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What kind of clothes are needed for trekking ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>The best time for trekking can be subjective to your taste. Each season brings a different experience to various aspects of the journey.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What type of shoes should I have ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Sports shoes are a must for any treks you undertake. If you expect days of walking through the hilly terrain make sure you carry your hiking boots. If you do not expect long days of walking, sports shoes will suffice but make sure they are durable and comfortable.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What are the problem faced while trekking at higher altitudes ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>As our itineraries are constructed by keeping the need of acclimatization, we try and make sure your transition to high altitudes will be an easy one. At times you can suffer from Acute Mountain Sickness (AMS) which causes headaches, lack of appetite, dizziness, and labored breathing upon exertion.</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How difficult is the trekking ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>The difficulty of our trekking depends on where you want to trek and how long you want to go. The shorter Trekking tend to be easier while the longer ones require some physical fitness. Be prepared for some steep trails leading to amazing views.</p>
                </AccordionItemPanel>
            </AccordionItem>
      </Accordion>
      </div>

    </div>
</div>
</div>
</div>
</section>
      
    </div>
  );
}

export default Faq_modal;