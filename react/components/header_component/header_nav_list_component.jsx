import React, { Component, Suspense } from "react";
// import './header_nav_list_component.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Container,Row,Col } from 'react-bootstrap';
import $ from 'jquery';
import axios from 'axios'
import { Link} from 'react-router-dom'
import Search from '../search_component/search'
//import Info from'../info/info';
import Logo from '../../../tourism_project/static/assets/img/h2h-logo.png';
//main component....................


class HeaderComponent extends Component {

constructor(props) {
  super(props);
  this.state={season: [],category:[]}
}
componentDidMount()
{


axios.get('/view_season_category_all/')
      .then(res => {        
        this.setState({season: res.data.season,category: res.data.category})
      })
}

componentDidUpdate(){
	var $mobile_nav = $('.nav-menu').clone().prop({
		class: 'mobile-nav d-lg-none'
	  });
	  $('body').append($mobile_nav);
}



    render() {

let season_item=[]
let season_length=Object.keys(this.state.season).length
for(let i=0;i<season_length;i++ )
                 {
                   let path = "/all_tracks?type=season&sub_type="+this.state.season[i].name;
					season_item.push(<li><a href={path}>{this.state.season[i].name}</a></li>);
            	  }

let category_item=[] 
let category_length=Object.keys(this.state.category).length
let peak_climbing_nav=[]
let tea_house_nav=[]
for(let i=0;i<category_length;i++ ) 
                 {    
                  let path = "/all_tracks?type=category&sub_type="+this.state.category[i].name;            
                  if(this.state.category[i].name=='Peak Climbing')
				   {	

					peak_climbing_nav.push(<li><a href={path}>{this.state.category[i].name}</a></li>);	   
					
					}else if(this.state.category[i].name=='Garhwal Himalayas' || this.state.category[i].name=='Kumaun Himalayas' || this.state.category[i].name=='Nepal Himalayas')
				   {		
					peak_climbing_nav.push(<li><a href={path}>{this.state.category[i].name}</a></li>);
					
			       }else if(this.state.category[i].name=='Beautiful location' || this.state.category[i].name=='Students package' || this.state.category[i].name=='Family package' || this.state.category[i].name=='Snow cover')
				   {				
					tea_house_nav.push(<li><a href={path}>{this.state.category[i].name}</a></li>); 
					  
			       }else{					   
					   category_item.push(<li><a href={path}>{this.state.category[i].name}</a></li>)
					}
				 
				 }





    return (
<div className='mob'>

<header id="header" className="fixed-top header-transparent">
      <div className="container-fluid padding-left-0">

      <div className="row">
        <div className="d-flex justify-con">          
          
          <div className="logo">
            <Link to="/"><img src={Logo} alt="hike2heaven-logo"/></Link>
          </div>
        
          <nav className="nav-menu d-lg-block">
            <ul>
              
			  <li className="drop-down"><a href="#">Latests</a>
                <ul>
                  <li><Link to={{pathname: '/event_article'}}>Article</Link></li>
                  <li><Link to={{pathname: '/latest_updates'}}>Latest Update</Link></li>
				  <li><Link to={{pathname: '/save_himalaya'}}>Social Perspective</Link></li>
				  <li><Link to={{pathname: '/all_trekker_stories'}}>Trekker Story</Link></li>
				  <li><Link to={{pathname: '/all_reviews'}}>Reviews</Link></li>
                </ul>
              </li>
              
			  <li className="drop-down"><a href="#">Treks</a>
                <ul>
                <li><a href="/all_tracks?type=all&sub_type=all">All Treks</a></li>
                  {season_item}
                </ul>
              </li>		
			  <li className="drop-down"><a href="#">Treks by Category</a>
                <ul> 
                  {category_item}
                </ul>
              </li>
			  <li className="drop-down"><a href="#">Services</a>
                <ul>
                  {peak_climbing_nav}
                  <li><a href="#"><Link to={{pathname: '/rafting'}}>Rafting</Link></a></li>
                  <li><a href="#"><Link to={{pathname: '/chardham'}}>Chardham</Link></a></li>
                  <li><a href="#"><Link to={{pathname: '/customize'}}>Customization</Link></a></li>
                  <li><a href="#"><Link to={{pathname: '/student'}}>Student Destination</Link></a></li>
                </ul>
              </li>

			  <li className="drop-down"><a href="#">Tea House</a>
                <ul>
                  <li><a href="#"><Link to={{pathname: '/tea_house'}}>All About Tea House</Link></a></li>
                  {tea_house_nav}
                </ul>
              </li>
			  {/* <li className="drop-down"><a href="#">Customize</a>
                <ul>
                  
                </ul>
              </li> */}
			  
              <li className="drop-down"><a href="#">About Us</a>
                <ul>
                  <li><a href="#"><Link to={{pathname: '/what_we_do'}}>What We Do</Link></a></li>
                  <li><a href="#"><Link to={{pathname: '/about_us'}}>About Us</Link></a></li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <div className='head-toolbar-2'>
          <div className='l-display-none'>
            <Search/>
            <Link to="/home" id='logo'><h1 style={{color:'black', textAlign:'left'}}><a><span>Hike2Heaven</span></a></h1></Link>
          </div>
            
            
            
          </div> */}
        </div>
      </div>

    </div>
  </header>
</div>
		
        );
  }
}

export default HeaderComponent;
