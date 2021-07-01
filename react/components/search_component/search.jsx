import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Container,Row,Col,Image } from 'react-bootstrap';
import './search.css'

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


//search component....................


let search_key=''
const Search = (props) => {
    const [State,setState] = useState(
      {
        data:'',
        track:[],
        track_media:[],
        type:'',
      }
    );
	
	const [loading,setLoading] = useState(false);


let history = useHistory();

  useEffect(() => {
  
   
   
    if(State.type=='response')
    {

     history.push("/search",{track:State.track, track_media:State.track_media, search_key:search_key});
    }

  },[State.data]);


    const changeState = (new_data,flag)=>{
       search_key=State.data//flag=='data'  OR flag=='response'
       
    if(flag=='data')
    {
        setState({data: new_data.target.value,track:[],track_media:[],type:'data'});
    }else  if(flag=='response')
        {
            setState({data:'',track:new_data.track, track_media:new_data.track_media, type:'response'});
        }
    }

    const apiCall =(search)=>{
                                event.preventDefault();
                                event.stopPropagation();
								setLoading(true)              
                                /*changeState([],'response')*/
                                axios.get('http://localhost:8000/search/',{params:{search_key:State.data}})
                                .then(res => {
                                setLoading(false)
                                changeState(res.data,'response')

                                })
                              }

    const search_change =(event)=>{
        
        changeState(event,'data')
    }

    return (

       
//    <Form id='search-form' className='search-form' onSubmit={apiCall} style={{}}>

// <div className="search-box">
//             <input type="text" id="search" placeholder="" onChange={search_change} value={State.data} required className="search-txt"/>
//             <div className='head-icon-wrapper'>
//               <a className="search-btn">
//                       <i className="fas fa-search"></i>
//               </a>
//             </div>
//         </div>

	  //  <div className="container-2">
		  
		//   <input type="search" id="search" placeholder="" onChange={search_change} value={State.data} required/>
    //   <span id ='search-icon' className="icon"><i className="fa fa-search"></i></span>
	  // </div> 
	// <div style={{display:loading?'block':'none'}}><Loading/></div>
  //  </Form>


<div className="search-container">
  <Form id='search-form' className='search-form' onSubmit={apiCall} style={{}}>
    <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search" onChange={search_change} value={State.data} required/>
    <label className="button searchbutton" for="searchright"><span className="mglass">&#9906;</span></label>
  </Form>
</div>



    );
}

export default Search;