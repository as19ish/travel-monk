(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{121:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=s(a(0)),i=s(a(17)),o=a(12);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e){return n.default.createElement(o.Modal,r({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,style:{color:"white"}}),n.default.createElement(o.Modal.Header,{closeButton:!0,className:"modal_cross_sign_white",style:{background:"black"}},n.default.createElement(o.Modal.Title,{id:"contained-modal-title-vcenter",style:{color:"#FFCC03",fontSize:"1.2rem"}},"TREKKER STORY")),n.default.createElement(o.Modal.Body,null,n.default.createElement("p",{style:{textTransform:"capitalize",whiteSpace:"pre-line",color:"black",fontSize:"1.4rem",fontWeight:"600",textAlign:"center"}},e.title),n.default.createElement("br",null),n.default.createElement(o.Image,{src:e.src,thumbnail:!0}),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("p",{id:"replace_br",style:{whiteSpace:"pre-line",color:"black",fontSize:"1.2rem",fontWeight:"600"}},e.data)))}var f=function(e){function t(e){c(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={flag:!1,modal_data:"",title:"",src:""},a}return d(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props.stories;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"col-lg-4 col-md-3 testimonials-item "+t.name.trim().split(" ")[0],onClick:function(){e.setState({src:"/static/media/"+t.trek_photo,flag:!0,modal_data:t.description,title:t.name+"'s Story"})},style:{cursor:"pointer"}},n.default.createElement("div",{className:"course-item"},n.default.createElement("img",{src:"/static/media/"+t.trek_photo,className:"img-fluid",alt:"...",style:{height:"200px",width:"100%"}}),n.default.createElement("div",{className:"course-content",style:{backgroundColor:"white"}},n.default.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3 trek_name"},n.default.createElement("h4",null,t.trek_name)),n.default.createElement("p",{style:{marginBottom:"0"}},t.description.substring(0,120).concat(".... ")),n.default.createElement("div",{className:"trainer d-flex justify-content-between align-items-center"},n.default.createElement("div",{className:"trainer-profile d-flex align-items-center"},n.default.createElement("img",{src:"/static/media/"+t.profile_photo,className:"img-fluid",alt:""}),n.default.createElement("span",null,t.name)))))),n.default.createElement(m,{show:this.state.flag,data:this.state.modal_data,title:this.state.title,src:this.state.src,onHide:function(){return e.setState({flag:!1})}}))}}]),t}(n.default.Component),p=function(e){function t(e){c(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={stories:[]},a}return d(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("call_back_fixed_button_id").style.display="block",i.default.get("/view_trekker_story/").then((function(t){e.setState(t.data)}))}},{key:"componentDidUpdate",value:function(){$(document).ready((function(){var e,t,a={},l=$(".testimonials-container").isotope({itemSelector:".testimonials-item",filter:function(){var a=$(this),l=!t||a.text().match(t),r=!e||a.is(e);return l&&r}});$("#testimonials-flters li").on("click",(function(){var t=$(this);$("#testimonials-flters li").removeClass("filter-active"),$(this).addClass("filter-active");var r=t.parents(".button-group").attr("data-filter-group");a[r]=t.attr("data-filter"),e=function(e){var t="";for(var a in e)t+=e[a];return t}(a),l.isotope()}));var r,n,i,o=$(".quicksearch").keyup((r=function(){t=new RegExp(o.val(),"gi"),l.isotope()},n=n||100,function(){clearTimeout(i);var e=arguments,t=this;function a(){r.apply(t,e)}i=setTimeout(a,n)}))}))}},{key:"render",value:function(){for(var e=Object.keys(this.state.stories).length,t=[],a=[],l=0;l<e;l++)0==l&&a.push(n.default.createElement("li",{"data-filter":"*",className:"filter-active"},"All")),a.push(n.default.createElement("li",{"data-filter":"."+this.state.stories[l].name.trim().split(" ")[0]},this.state.stories[l].name)),t.push(n.default.createElement(f,{stories:this.state.stories[l],index:l}));var r=["3.jpg"].map((function(e,t,a){var l={backgroundImage:"url(/static/media/home_images/"+e+")"},r=0==t?"carousel-item active":"carousel-item";return n.default.createElement("div",{className:r,style:l},n.default.createElement("div",{className:"carousel-container"},n.default.createElement("div",{className:"container"},n.default.createElement("h2",{className:"animate__animated animate__fadeInDown"},"THE BEST EXPERIENCES ",n.default.createElement("span",{style:{borderLeft:"4px solid #18d26e",color:"#18d26e"}},"  TREKKER STORIES")))))}));return n.default.createElement("div",null,n.default.createElement("section",{id:"intro",className:"height_450px"},n.default.createElement("div",{className:"intro-container"},n.default.createElement("div",{id:"introCarousel",className:"carousel  slide carousel-fade","data-ride":"carousel"},n.default.createElement("ol",{className:"carousel-indicators"}),n.default.createElement("div",{className:"carousel-inner",role:"listbox"},r),n.default.createElement("a",{className:"carousel-control-prev",href:"#introCarousel",role:"button","data-slide":"prev"},n.default.createElement("span",{className:"carousel-control-prev-icon ion-chevron-left","aria-hidden":"true"}),n.default.createElement("span",{className:"sr-only"},"Previous")),n.default.createElement("a",{className:"carousel-control-next",href:"#introCarousel",role:"button","data-slide":"next"},n.default.createElement("span",{className:"carousel-control-next-icon ion-chevron-right","aria-hidden":"true"}),n.default.createElement("span",{className:"sr-only"},"Next"))))),n.default.createElement("section",{id:"testimonials",className:"courses section-bg"},n.default.createElement("div",{className:"container","data-aos":"fade-up"},n.default.createElement("div",{className:"section-header"},n.default.createElement("h3",null,"Trekker stories")),n.default.createElement("div",{className:"row","data-aos":"fade-up","data-aos-delay":"100"},n.default.createElement("div",{className:" col-lg-4"}),n.default.createElement("div",{className:" col-lg-4"},n.default.createElement("p",null,n.default.createElement("input",{type:"text",className:"quicksearch input-sm form-control",placeholder:"Trekker name / trek name"}))),n.default.createElement("div",{className:" col-lg-4"})),n.default.createElement("div",{className:"row","data-aos":"fade-up","data-aos-delay":"100"},n.default.createElement("div",{className:" col-lg-12"},n.default.createElement("ul",{id:"testimonials-flters",className:"button-group data-filter-group"},a))),n.default.createElement("div",{className:"row testimonials-container","data-aos":"fade-up","data-aos-delay":"200"},t))))}}]),t}(n.default.Component);t.default=p}}]);