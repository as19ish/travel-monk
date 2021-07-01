import React from "react";
import "./trekker_story.css";
import $ from 'jquery';
import axios from 'axios';
import { Link} from 'react-router-dom'
import { Jumbotron, Container, Row,Col,Card,Button,Badge,Carousel,Image,OverlayTrigger,Tooltip } from 'react-bootstrap';
class Story extends React.Component {

constructor(props) {
                        super(props);
                        this.state = {stories:[],
                                      };

                         this.refresh=this.refresh.bind(this);
                         this.update=this.update.bind(this);

                      }

refresh()
{
        axios.get('http://localhost:8000/view_trekker_story_all/')
              .then(res => {
                this.setState(res.data)
              })

}
update(profile_photo,trek_photo,id,data)
{
              axios({
                                method: 'post',
                                url: 'http://localhost:8000/update_trekker_story/',
                                data:{id:id,profile_photo:profile_photo,trek_photo:trek_photo,action:data}
                                }).then(res => {
                                                this.setState(res.data)
                                              })
}

componentDidMount()
{

axios.get('http://localhost:8000/view_trekker_story_all/')
      .then(res => {

        this.setState(res.data)

      })


}


  render() {

$(document).ready(function(){

});


    let cards=this.state.stories.map((variant, idx) => (
  <Carousel.Item style={{width:'100%'}}>
        <Card key={idx} className="card_flex_column" style={{ width: '100%',height:'auto',flexDirection:'row',border:'none',background:'#ebebeb' }}>
              <Card.Img variant="top" src={"/static/media/"+variant.trek_photo} className="blog_card_width" style={{width:'50%'}} />
              <Card.Body className="blog_card_body_width" style={{width:'50%',fontStyle:'oblique'}}>
                <Card.Title style={{textAlign:'center',fontWeight:'bold',textTransform:'capitalize'}}>{variant.name+"'s Story"}&nbsp;&nbsp;<span style={{color:'green',textTransform:'uppercase'}}>{variant.trek_name}</span></Card.Title>

                <Card.Text>
                <Image thumbnail roundedCircle variant="top" src={"/static/media/"+variant.profile_photo} style={{height:'200px',width:'200px'}}/>
                  <br/><br/>
                   <Button onClick={()=>alert(variant.description)}>Click For Description</Button>
                   {variant.status=='approved'?null:<Button variant="success" onClick={()=>this.update(variant.profile_photo,variant.trek_photo,variant.id,'approve')} style={{marginLeft:'10px'}}>Approve</Button>}
                    <Button variant="danger" onClick={()=>this.update(variant.profile_photo,variant.trek_photo,variant.id,'delete')} style={{marginLeft:'10px'}}>Delete</Button>
                    <Button variant="info" onClick={()=>this.refresh()} style={{marginLeft:'10px'}}>Refresh</Button>

                </Card.Text>
              </Card.Body>
            </Card>
    </Carousel.Item>
));



return(

<Container className='admin_div' style={{padding:'2rem',minHeight:'200px',marginBottom:'2rem',textAlign:'center'}}>
  <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Trekker's Story <Badge variant="light">{this.state.stories.length}</Badge></span>

<Jumbotron className="flex-container jumbo_carousel carouel_jumbo_height1" style={{paddingLeft:'6%',paddingRight:'6%',background:'#ebebeb',minHeight:'530px'}}>
<Carousel interval={null} style={{width:'100%'}}>
  {cards}
  </Carousel>
</Jumbotron>
</Container>

)
  }
}

export default Story;
