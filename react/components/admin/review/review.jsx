import React from "react";
import "./review.css";
import $ from 'jquery';
import axios from 'axios';
import { Link} from 'react-router-dom'
import { Jumbotron, Container, Row,Col,Card,Button,Badge,Carousel,Image,OverlayTrigger,Tooltip } from 'react-bootstrap';
class Review extends React.Component {

constructor(props) {
                        super(props);
                        this.state = {reviews:[],
                                      };

                         this.refresh=this.refresh.bind(this);
                         this.update=this.update.bind(this);

                      }

refresh()
{
        axios.get('http://localhost:8000/view_reviews_all/')
              .then(res => {
                this.setState(res.data)
              })

}
update(photo,id,data)
{
              axios({
                                method: 'post',
                                url: 'http://localhost:8000/update_reviews/',
                                data:{id:id,photo:photo,action:data}
                                }).then(res => {
                                                this.setState(res.data)
                                              })
}

componentDidMount()
{

axios.get('http://localhost:8000/view_reviews_all/')
      .then(res => {

        this.setState(res.data)

      })


}


  render() {
  

$(document).ready(function(){

});


  let cards=this.state.reviews.map((variant, idx) => (
  <Carousel.Item style={{width:'100%'}}>
        <Card key={idx} className="card_flex_column" style={{ width: '100%',height:'auto',flexDirection:'row',border:'none',background:'#ebebeb' }}>
            <div style={{width:'50%',textAlign:'center'}}>

                     <Container fluid>
                      <Row>
                        <Col xs={9} sm={9} lg={9}><Image thumbnail roundedCircle variant="top" src={"/static/media/"+variant.photo} className="blog_card_width" style={{height:'300px',width:'300px'}} /></Col>
                        <Col xs={3} sm={3} lg={3}><div style={{height:'300px',width:'50px',marginTop:'40%'}}>


<OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                              <Tooltip id={`tooltip-${'right'}`}>
                                Trek by {variant.name} <strong>{variant.trek_name}</strong>.
                              </Tooltip>
                            }
                          >
                            <i class="fa fa-hiking fa-2x" aria-hidden="true" style={{color:'#FFCC03',width:''}}></i>
                          </OverlayTrigger>

                           <br/><br/>
                        <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                              <Tooltip id={`tooltip-${'right'}`}>
                                <strong>{'Loved'}</strong>.
                              </Tooltip>
                            }
                          >
                            <i class="fa fa-heart fa-2x" aria-hidden="true" style={{color:'#FFCC03',width:''}}></i>
                          </OverlayTrigger>
                          <br/><br/>
                          <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                              <Tooltip id={`tooltip-${'right'}`}>
                                Ratings by {variant.name} <strong>{variant.star}</strong>.
                              </Tooltip>
                            }
                          >
                            <i class="fa fa-star fa-2x" aria-hidden="true" style={{color:'#FFCC03',width:''}}></i>
                          </OverlayTrigger>

                           <br/><br/>
                          <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                              <Tooltip id={`tooltip-${'right'}`}>
                                Services liked by {variant.name} <strong>{variant.category}</strong>.
                              </Tooltip>
                            }
                          >
                            <i class="fa fa-thumbs-up fa-2x" aria-hidden="true" style={{color:'#FFCC03',width:''}}></i>
                          </OverlayTrigger>






                        </div></Col>
                      </Row>
                    </Container>

              </div>
              <Card.Body className="blog_card_body_width" style={{width:'50%',fontStyle:'oblique'}}>
                <Card.Text>

                   {variant.description }
                   <div>
                   {variant.status=='approved'?null:<Button onClick={()=>this.update(variant.photo,variant.id,'approve')} style={{marginLeft:'10px'}}>Approve</Button>}
                    <Button onClick={()=>this.update(variant.photo,variant.id,'delete')} style={{marginLeft:'10px'}}>Delete</Button>
                    <Button onClick={()=>this.refresh()} style={{marginLeft:'10px'}}>Refresh</Button>
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </Carousel.Item>
));



return(

<Container className='admin_div' style={{padding:'2rem',minHeight:'200px',marginBottom:'2rem',textAlign:'center'}}>
  <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Reviews <Badge variant="light">{this.state.reviews.length}</Badge></span>

<Jumbotron className="flex-container jumbo_carousel carouel_jumbo_height1" style={{paddingLeft:'6%',paddingRight:'6%',background:'#ebebeb',minHeight:'530px'}}>
<Carousel interval={null} style={{width:'100%'}}>
  {cards}
  </Carousel>
</Jumbotron>

</Container>

)
  }
}

export default Review;
