import React, { Component } from "react";
import axios from 'axios';
import './event_article.css';
import { Jumbotron, Container, Button,Accordion,Card,Row,Col,Modal,Image} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{color:'white'}}
    >
      <Modal.Header closeButton className="modal_cross_sign_white" style={{background:'black'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem'}}>
          {props.data['subject']}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.data['sub1']}
        </p>
        <Image src={"/static/media/"+props.data['img1']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'400',textAlign:'left'}}>
         {props.data['des1']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.data['sub2']}
        </p>
        <Image src={"/static/media/"+props.data['img2']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'400',textAlign:'left'}}>
         {props.data['des2']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.data['sub3']}
        </p>
        <Image src={"/static/media/"+props.data['img3']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'400',textAlign:'left'}}>
         {props.data['des3']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'600',textAlign:'center'}}>
         {props.data['sub4']}
        </p>
        <Image src={"/static/media/"+props.data['img4']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1.2rem',fontWeight:'400',textAlign:'left'}}>
         {props.data['des4']}
        </p>
        <br/><br/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


class Event_article extends React.Component {

constructor(props) {
  super(props);
  this.state={
              modal_data:{},
              modalShow: false,
              data: {},
              event: {},
              blog: {},
              info: {},
              article: {},
              other: {},
              current_situation: {},
              tryst_with_nature: {},
              towards_pragmatic: {},
              enthusiastic_step: {},
              himalayan_roar: {},
              inflating_greenery: {},
              give_traning_of_soft_skills_to_villagers_child:{},
              enthusiastic_about_green_himalayas:{},
              himalayan_research: {},
              flag:'',  //decides which to expand on click,, its, values are.....event,blog etc
              }
              this.handle_expand = this.handle_expand.bind(this);
              this.refresh=this.refresh.bind(this);
              this.update=this.update.bind(this);
}

update(id,img1,img2,img3,img4)
{

 let event=[]
        let blog=[]
        let info=[]
        let article=[]
        let other=[]
        let current_situation=[]
        let tryst_with_nature=[]
        let towards_pragmatic=[]
        let enthusiastic_step=[]
        let himalayan_roar=[]
        let inflating_greenery=[]
        let give_traning_of_soft_skills_to_villagers_child=[]
        let enthusiastic_about_green_himalayas=[]
        let himalayan_research=[]
              axios({
                                method: 'post',
                                url: 'http://localhost:8000/delete_event_article/',
                                data:{id:id,img1:img1,img2:img2,img3:img3,img4:img4}
                                }).then(res => {
                               for(let x=0;x<res.data.event_data.length;x++)
            {
              if(res.data.event_data[x]['type']=='Event')
              {
                event.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Blog')
              {
                blog.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Info')
              {
                info.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Article')
              {
                article.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Other')
              {
                other.push(res.data.event_data[x])
              }
              
              if(res.data.event_data[x]['type'].toLowerCase()=='current_situation')
              {
                current_situation.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='tryst_with_nature')
              {
                tryst_with_nature.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='towards_pragmatic')
              {
                towards_pragmatic.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_step')
              {
                enthusiastic_step.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_roar')
              {
                himalayan_roar.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='inflating_greenery')
              {
                inflating_greenery.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='give_traning_of_soft_skills_to_villagers_child')
              {
                give_traning_of_soft_skills_to_villagers_child.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_about_green_himalayas')
              {
                enthusiastic_about_green_himalayas.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_research')
              {
                himalayan_research.push(res.data.event_data[x])
              }
            }
        this.setState({
                       data: res.data.event_data,
                       event: event,
                       blog: blog,
                       info: info,
                       article:article,
                       other:other,
                       current_situation: current_situation,
                       tryst_with_nature: tryst_with_nature,
                                          towards_pragmatic: towards_pragmatic,
                                          enthusiastic_step: enthusiastic_step,
                                          himalayan_roar: himalayan_roar,
                                          inflating_greenery: inflating_greenery,
                                          give_traning_of_soft_skills_to_villagers_child:give_traning_of_soft_skills_to_villagers_child,
                                          enthusiastic_about_green_himalayas:enthusiastic_about_green_himalayas,
                                          himalayan_research: himalayan_research,

        })
                             })
                    }

refresh()
{
     let event=[]
        let blog=[]
        let info=[]
        let article=[]
        let other=[]
        let current_situation=[]
        let tryst_with_nature=[]
        let towards_pragmatic=[]
        let enthusiastic_step=[]
        let himalayan_roar=[]
        let inflating_greenery=[]
        let give_traning_of_soft_skills_to_villagers_child=[]
        let enthusiastic_about_green_himalayas=[]
        let himalayan_research=[]
axios.get('http://localhost:8000/view_event_article_ALL/')
      .then(res => {
        for(let x=0;x<res.data.event_data.length;x++)
            {
              if(res.data.event_data[x]['type']=='Event')
              {
                event.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Blog')
              {
                blog.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Info')
              {
                info.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Article')
              {
                article.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Other')
              {
                other.push(res.data.event_data[x])
              }
              
              if(res.data.event_data[x]['type'].toLowerCase()=='current_situation')
              {
                current_situation.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='tryst_with_nature')
              {
                tryst_with_nature.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='towards_pragmatic')
              {
                towards_pragmatic.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_step')
              {
                enthusiastic_step.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_roar')
              {
                himalayan_roar.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='inflating_greenery')
              {
                inflating_greenery.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='give_traning_of_soft_skills_to_villagers_child')
              {
                give_traning_of_soft_skills_to_villagers_child.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_about_green_himalayas')
              {
                enthusiastic_about_green_himalayas.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_research')
              {
                himalayan_research.push(res.data.event_data[x])
              }
            }
        this.setState({
                       data: res.data.event_data,
                       event: event,
                       blog: blog,
                       info: info,
                       article:article,
                       other:other,
                       current_situation: current_situation,
                       tryst_with_nature: tryst_with_nature,
                                          towards_pragmatic: towards_pragmatic,
                                          enthusiastic_step: enthusiastic_step,
                                          himalayan_roar: himalayan_roar,
                                          inflating_greenery: inflating_greenery,
                                          give_traning_of_soft_skills_to_villagers_child:give_traning_of_soft_skills_to_villagers_child,
                                          enthusiastic_about_green_himalayas:enthusiastic_about_green_himalayas,
                                          himalayan_research: himalayan_research,

        })
      })
}

handle_expand(name)
{
 this.setState({flag:name})
}
componentDidMount()
{

        let event=[]
        let blog=[]
        let info=[]
        let article=[]
        let other=[]
        let current_situation=[]
        let tryst_with_nature=[]
        let towards_pragmatic=[]
        let enthusiastic_step=[]
        let himalayan_roar=[]
        let inflating_greenery=[]
        let give_traning_of_soft_skills_to_villagers_child=[]
        let enthusiastic_about_green_himalayas=[]
        let himalayan_research=[]
axios.get('http://localhost:8000/view_event_article_ALL/')
      .then(res => {
        for(let x=0;x<res.data.event_data.length;x++)
            {
              if(res.data.event_data[x]['type']=='Event')
              {
                event.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Blog')
              {
                blog.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Info')
              {
                info.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Article')
              {
                article.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Other')
              {
                other.push(res.data.event_data[x])
              }
              
              if(res.data.event_data[x]['type'].toLowerCase()=='current_situation')
              {
                current_situation.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='tryst_with_nature')
              {
                tryst_with_nature.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='towards_pragmatic')
              {
                towards_pragmatic.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_step')
              {
                enthusiastic_step.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_roar')
              {
                himalayan_roar.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='inflating_greenery')
              {
                inflating_greenery.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='give_traning_of_soft_skills_to_villagers_child')
              {
                give_traning_of_soft_skills_to_villagers_child.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='enthusiastic_about_green_himalayas')
              {
                enthusiastic_about_green_himalayas.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type'].toLowerCase()=='himalayan_research')
              {
                himalayan_research.push(res.data.event_data[x])
              }
            }
        this.setState({
                       data: res.data.event_data,
                       event: event,
                       blog: blog,
                       info: info,
                       article:article,
                       other:other,
                       current_situation: current_situation,
                       tryst_with_nature: tryst_with_nature,
                                          towards_pragmatic: towards_pragmatic,
                                          enthusiastic_step: enthusiastic_step,
                                          himalayan_roar: himalayan_roar,
                                          inflating_greenery: inflating_greenery,
                                          give_traning_of_soft_skills_to_villagers_child:give_traning_of_soft_skills_to_villagers_child,
                                          enthusiastic_about_green_himalayas:enthusiastic_about_green_himalayas,
                                          himalayan_research: himalayan_research,

        })
      })
}


    render() {
    console.log('state=', this.state);

let items=['event','blog','info','article','other','current_situation','tryst_with_nature','towards_pragmatic','enthusiastic_step','himalayan_roar','inflating_greenery','give_traning_of_soft_skills_to_villagers_child','enthusiastic_about_green_himalayas','himalayan_research']
let event_items=[[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
for(let i=0;i<items.length;i++)
{
let name=items[i]
  for(let x=0;x<this.state[name].length;x++)
        {
        if(x>3)
        {
           if(this.state.flag!=name)
           {
           event_items[i].push(<div style={{textAlign:'center',marginLeft:'auto',marginTop:'50px'}}><Button className='ev_button' onClick={()=>this.handle_expand(name)}>View All</Button></div>)
           break;
           }
        }
        event_items[i].push(
        <Col className='on_small_padding_0'>
                   <ul>
                      <li style={{cursor:'pointer'}} onClick={() => {this.setState({modalShow:true,modal_data:this.state[name][x]})}}>
                        <a >
                          <div className="team-img">
                            <div className="front">
                              <img src={"/static/media/"+this.state[name][x]['img1']} alt=''/>
                            </div>
                            <div className="back">
                              <img src={"/static/media/"+this.state[name][x]['img2']} alt=""/>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <h3 onClick={() => {this.setState({modalShow:true,modal_data:this.state[name][x]})}} style={{cursor:'pointer',fontSize:'1rem', textAlign:'center',textTransform:'capitalize',fontWeight:'500'}}>{this.state[name][x]['subject']}</h3>
                <Button variant="danger" onClick={()=>this.update(this.state[name][x]['id'],this.state[name][x]['img1'],this.state[name][x]['img2'],this.state[name][x]['img3'],this.state[name][x]['img4'])} style={{}}>Delete</Button>

                </Col>

        )
        }

}


    return (

<div>
<br/>
<Button variant="info" onClick={()=>this.refresh()} style={{textAlign:'center'}}>Refresh</Button>
<br/>
    <Container style={{marginTop:'50px'}}>
    <i className="fa fa-handshake-o" aria-hidden="true"></i>
    <h2 className='event_heading'>EVENTS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[0]}
      </Row>
    </Container>
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>BLOGS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[1]}
      </Row>
    </Container>
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>INFO</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[2]}
      </Row>
    </Container>
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>ARTICLES</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[3]}
      </Row>
    </Container>
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>OTHERS</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[4]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>'current_situation</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[5]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>tryst_with_nature</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[6]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>towards_pragmatic</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[7]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>enthusiastic_step</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[8]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>himalayan_roar</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[9]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>inflating_greenery</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[10]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>give_traning_of_soft_skills_to_villagers_child</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[11]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>enthusiastic_about_green_himalayas</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[12]}
      </Row>
    </Container>
    
    <br/>
     <Container style={{marginTop:'50px'}}>
    <h2 className='event_heading'>himalayan_research</h2>
     <Row className='row-cols-md-4 row-cols-lg-4 row-cols-4'>
        {event_items[13]}
      </Row>
    </Container>

    <MyVerticallyCenteredModal
        show={this.state.modalShow}
        data={this.state.modal_data}
        onHide={() => this.setState({modalShow:false})}
      />

</div>
        );
  }
}



export default Event_article;