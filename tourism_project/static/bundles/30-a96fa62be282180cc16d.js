(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=c(a(0)),o=c(a(17)),l=c(a(150));a(157),a(159);var i=a(145);function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={reviews:[]},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this;o.default.get("http://localhost:8000/view_reviews_4/").then((function(t){e.setState(t.data)}))}},{key:"componentDidUpdate",value:function(){$(document).ready((function(){$(".more").each((function(){var e=$(this).html();if(e.length>100){var t=e.substr(0,100)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+e.substr(100,e.length-100)+'</span>&nbsp;&nbsp;<a href="" class="morelink">Show more ></a></span>';$(this).html(t)}})),$(".morelink").click((function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html("Show more >")):($(this).addClass("less"),$(this).html("Show less")),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1}))}))}},{key:"render",value:function(){console.log("reviews",this.state);var e=this.state.reviews.map((function(e,t){for(var a=[],n=0;n<parseInt(e.star);n++)a.push(s.default.createElement("i",{className:"fa fa-star","aria-hidden":"true"}));return s.default.createElement("div",{className:"testimonial-item","data-aos":"fade-up"},s.default.createElement(i.LazyLoadImage,{className:"testimonial-img",alt:"...",src:"/static/media/"+e.photo}),s.default.createElement("h3",null,e.name),s.default.createElement("section",{className:"rating-wrapper"},a),s.default.createElement("p",{className:"more"},'"',e.description,'"'))}));return s.default.createElement("section",{id:"testimonials",className:"testimonials section-bg"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"section-header"},s.default.createElement("h3",null,"Reviews")),e.length>0?s.default.createElement(l.default,n({className:"owl-theme"},{autoplay:!1,lazyLoad:!0,rewind:!0,margin:20,animateOut:"fadeOut",animateIn:"fadeIn",responsiveClass:!0,autoHeight:!0,autoplayTimeout:7e3,smartSpeed:600,nav:!0,loop:!0,responsive:{0:{items:1},600:{items:3},1024:{items:3},1366:{items:3}}}),e):null),s.default.createElement("div",{style:{marginTop:"10px",textAlign:"center"}},s.default.createElement("a",{href:"/all_reviews",className:"common_btn btn-get-started scrollto animate__animated animate__fadeInUp"},"View All")))}}]),t}(s.default.Component);t.default=u}}]);