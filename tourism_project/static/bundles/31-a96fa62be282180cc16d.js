(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(13),c=a(0),r=d(c),i=(d(a(18)),a(12)),m=d(a(53)),u=d(a(198)),s=d(a(199)),o=d(a(200));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return f(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){document.getElementById("call_back_fixed_button_id").style.display="none"}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){if(console.log("inside track details render",this.props),0==Object.keys(this.props.location.state).length)return r.default.createElement("div",{style:{textAlign:"center"}},r.default.createElement("h4",{style:{color:"red"}},"No Data Available For This Trekking ...."),r.default.createElement(n.Link,{to:"/home"},r.default.createElement("button",{type:"button"},"Go home")));var e,t=this.props.location.state.dayPlanid_day_description_list,a=this.props.location.state.dayPlanid_subDaySequence_description_list,l=this.props.location.state.media,c=this.props.location.state.other_details,d=1,f=t.map((function(e){return d+=1,r.default.createElement("li",null,r.default.createElement("div",{className:d%2==0?"direction-r":"direction-l"},r.default.createElement("div",{className:"flag-wrapper"},r.default.createElement("span",{className:"flag"},"Day ",e[1]),r.default.createElement("span",{className:"time-wrapper"})),r.default.createElement("div",{className:"desc",style:{whiteSpace:"pre-line"}},e[2])))}));d=0,e=a.map((function(e){return 0==e.length?null:(d+=1,r.default.createElement("li",null,r.default.createElement("div",{className:d%2!=0?"direction-r":"direction-l"},r.default.createElement("div",{className:"flag-wrapper"},r.default.createElement("span",{className:"flag"},"Day ",d),r.default.createElement("span",{className:"time-wrapper"})),r.default.createElement("div",{className:"desc"},e.map((function(e){return r.default.createElement("p",{style:{whiteSpace:"pre-line"}},r.default.createElement("i",{className:"fa fa-fighter-jet"})," ",e[2])}))))))}));for(var _=[],p=0;p<l.length;p++)_.push(r.default.createElement(i.Carousel.Item,{className:"main_carous effect5"},r.default.createElement("img",{className:"d-block w-100 height_450px",src:"/static/media/"+l[p].track_image,alt:"First slide"}),r.default.createElement(i.Carousel.Caption,{style:{top:"0",bottom:"auto",left:"0",right:"0",backgroundColor:"rgba(0, 0, 0, 0.5)"}},r.default.createElement("h2",{style:{textTransform:"uppercase"}},c[0].track_name))));for(var E=[],g=0;g<l.length;g++)E.push(r.default.createElement(i.Card,{className:"gallery_image_card"},r.default.createElement(i.Card.Img,{variant:"top",src:"/static/media/"+l[g].track_image,className:"gallery_image"})));return r.default.createElement(i.Container,{fluid:!0,className:"custom_track_details_Container"},0==l.length?null:r.default.createElement("div",{className:"carousel_container1"},r.default.createElement(i.Carousel,{interval:null,className:"main_carous effect5"},_)),r.default.createElement(i.Container,{fluid:!0},r.default.createElement(i.Row,{style:{padding:"20px"}},r.default.createElement(i.Col,{lg:8,sm:12,md:12,xl:8,className:"custom_column_track_detail"},r.default.createElement(i.Tabs,{defaultActiveKey:"about",id:"uncontrolled-tab-example",className:"uncontrolled-tab-example"},r.default.createElement(i.Tab,{eventKey:"about",title:"About Trek"},r.default.createElement(i.Row,{style:{padding:"20px"}},r.default.createElement(i.Col,{lg:12,sm:12,md:12,xl:12,style:{background:"none"}},r.default.createElement(i.Alert,null,r.default.createElement("legend",{style:{textAlign:"center",textTransform:"uppercase"}},r.default.createElement("b",null,c[0].track_name)),r.default.createElement("p",{style:{fontSize:"1rem",fontWeight:"500",whiteSpace:"pre-line"}},c[0].track_description))))),r.default.createElement(i.Tab,{eventKey:"info",title:"Basic Details",className:"custom_column_track_detail1"},r.default.createElement(i.Jumbotron,{style:{textAlign:"center",paddingLeft:"10%",paddingRight:"10%",fontSize:"1rem",fontWeight:"500"},className:"custom_column_track_detail1"},r.default.createElement(i.Table,{responsive:!0,className:"custom_column_track_detail1"},r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Trek Name"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_name)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Duration"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_duration," Days")),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Altitude"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_altitude)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Difficulty"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_difficulty)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Length"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_length," km")),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Best Season"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_best_season)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Start Point"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_start_point)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"End Point"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_end_point)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Nearest Railway"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_railway)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Nearest Airport"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_airport)),r.default.createElement("tr",null,r.default.createElement("th",{className:"align_left"},"Road Route"),r.default.createElement("td",{className:"capitalize align_left"},c[0].track_road)))))),r.default.createElement(i.Tab,{eventKey:"home",title:"Short Itinerary",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement("div",null,r.default.createElement("ul",{className:"timeline"},f))),r.default.createElement(i.Tab,{eventKey:"profile",title:"Tour Plan",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement("div",null,r.default.createElement("ul",{className:"timeline"},e))),r.default.createElement(i.Tab,{eventKey:"contact",title:"Cost",style:{fontSize:"1rem",fontWeight:"500"},className:"custom_column_track_detail1"},r.default.createElement(i.Jumbotron,{className:"custom_column_track_detail1"},r.default.createElement(i.Container,{className:"custom_column_track_detail1"},r.default.createElement(i.Row,null,r.default.createElement(i.Col,null,r.default.createElement("b",null,"Cost Per Person :")),r.default.createElement(i.Col,null,this.props.location.state.other_details[0].track_cost," Rs.")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(i.Row,null,r.default.createElement(i.Col,null,r.default.createElement("b",null,"Cost Customization :")),r.default.createElement(i.Col,null,r.default.createElement("p",{style:{textTransform:"capitalize",fontSize:"1rem",whiteSpace:"pre-line"}},this.props.location.state.other_details[0].track_cost_cusomization)))))),r.default.createElement(i.Tab,{eventKey:"activity",title:"Activities",style:{fontSize:"1rem",fontWeight:"500"},className:"custom_column_track_detail1"},r.default.createElement(i.Jumbotron,{style:{textAlign:"center"},className:"custom_column_track_detail1"},r.default.createElement(i.ListGroup,null,r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Snow Camping"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Meadows Camping"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Jungle Camping"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"River Side Camping"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Night Trekking"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Village Tourism"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Yoga"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Round Fire"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Small Camping Party"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Music In Peaceful Place"),r.default.createElement(i.ListGroup.Item,{action:!0,className:"custom_column_track_detail1"},"Some Other Adventure Activities")))),r.default.createElement(i.Tab,{eventKey:"releted_story",title:"Trekker Stories",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement(i.Jumbotron,{className:"custom_column_track_detail1"},r.default.createElement(u.default,{id:c[0].id,name:c[0].track_name}))),r.default.createElement(i.Tab,{eventKey:"gallery",title:"Gallery",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement(i.Jumbotron,{className:"custom_column_track_detail1"},E)),r.default.createElement(i.Tab,{eventKey:"Other",title:"Articles",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement(i.Jumbotron,{className:"custom_column_track_detail1"},r.default.createElement(o.default,{id:c[0].id,name:c[0].track_name}))),r.default.createElement(i.Tab,{eventKey:"releted_review",title:"Reviews",style:{fontSize:"1rem",fontWeight:"500"}},r.default.createElement(i.Jumbotron,{className:"custom_column_track_detail1"},r.default.createElement(s.default,{id:c[0].id,name:c[0].track_name}))))),r.default.createElement(i.Col,{lg:4,sm:12,md:12,xl:4},r.default.createElement(i.Jumbotron,{id:"_fix"},r.default.createElement(i.Container,{className:"track_detail_form_container"},r.default.createElement(m.default,{data:this.props.location.state})))))))}}]),t}(c.Component);t.default=p}}]);