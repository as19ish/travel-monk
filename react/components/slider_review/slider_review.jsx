import React from "react";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Slider_review extends React.Component {

constructor(props) {
                        super(props);
                        this.state = {reviews:[],
                                      };
                      }

componentDidMount()
{

axios.get('/view_reviews_4/')
      .then(res => {

        this.setState(res.data)

      })


}

componentDidUpdate(){

  $(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
}

  render() {
    console.log('reviews', this.state);
    let options = {
      autoplay: false,
      lazyLoad: true,
      rewind: true,
      margin: 20,
       
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
     
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 600,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 3
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    };


  let cards=this.state.reviews.map((variant, idx) =>{
    let stars = [];
    for(let i=0; i < parseInt(variant.star); i++){
      stars.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }
    return(
      <div className="testimonial-item" data-aos="fade-up">
                {/* <img src={"/static/media/"+variant.photo} className="testimonial-img" alt=""/> */}
                <LazyLoadImage
                  className="testimonial-img"
                  alt='...'
                  src={"/static/media/"+variant.photo} />
                <h3>{variant.name}</h3>
    <section className="rating-wrapper">{stars}</section>
        {/* <p><img src="/static/assets/img/quote-sign-left.png" class="quote-sign-left" alt=""/>{variant.description}<img src="/static/assets/img/quote-sign-right.png" class="quote-sign-right" alt=""/></p> */}
        <p className="more">"{variant.description}"</p>
      
                    {/* <ClampLines
                  text={variant.description}
                  id={idx}
                  lines={1}
                  ellipsis="..."
                  moreText="Expand"
                  lessText="Collapse"
                  className={idx}
                  innerElement="p"
                />           */}
              </div>
      )
  } );
 

return(
         
<section id="testimonials" className="testimonials section-bg">
    <div className="container">
    <div className="section-header">
        <h3>Reviews</h3>
      </div>
      <div style={{marginTop:'40px'}}>
      {cards.length>0?<OwlCarousel
            className="owl-theme"
            {...options}>
              {cards}
            </OwlCarousel>:null}
      </div>
    </div>
    <div style={{marginTop:'20px',textAlign:'center'}}>
      <a href="/all_reviews"><button className="common_btn btn-get-started scrollto animate__animated animate__fadeInUp">View All</button></a>
      </div>
    
  </section>
)
  }
}

export default Slider_review;
