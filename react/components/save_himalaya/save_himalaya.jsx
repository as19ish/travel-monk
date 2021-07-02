import React from 'react';
import './save_himalaya.css'
import {Container, Row,Col,Image,Tabs, Tab,Card,Modal,Button} from 'react-bootstrap';
import axios from 'axios';

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
        <Modal.Title id="contained-modal-title-vcenter" style={{color:'#FFCC03',fontSize:'1.2rem',textTransform:'capitalize'}}>
          {props.data['subject']}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub1']}
        </p>
        <Image src={"/static/media/"+props.data['img1']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des1']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub2']}
        </p>
        <Image src={"/static/media/"+props.data['img2']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des2']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub3']}
        </p>
        <Image src={"/static/media/"+props.data['img3']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
         {props.data['des3']}
        </p>
        <br/><br/>

        <p style={{textTransform:'capitalize',whiteSpace:'pre-line',color:'black',fontSize:'1.4rem',fontWeight:'650',textAlign:'center'}}>
         {props.data['sub4']}
        </p>
        <Image src={"/static/media/"+props.data['img4']} thumbnail /><br/><br/>
        <p style={{whiteSpace:'pre-line',color:'black',fontSize:'1rem',fontWeight:'600',textAlign:'left'}}>
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
class Tab2 extends React.Component {
	constructor(props)
		{
			super(props)
			this.state={				
						  loading:true,
						  modal_data:{},
						  modalShow: false,
						  data: {},
						  Current_situation: {},
						  Tryst_with_nature: {},
						  Towards_pragmatic: {},
						  Enthusiastic_step: {},
						  Himalayan_roar: {},
						  Inflating_greenery:{},
						  Give_Traning_of_Soft_Skills_To_Villagers_Child:{},
						  Enthusiastic_About_Green_Himalayas:{},
						  Himalayan_Research:{}
						  
						  
						  
					}
					
		}
		
		componentDidMount()
		{
			
			let event=[]
        let blog=[]
						  let Current_situation=[];
						  let Tryst_with_nature=[];
						  let Towards_pragmatic=[];
						  let Enthusiastic_step=[];
						  let Himalayan_roar=[];
						  let Inflating_greenery=[];
						  let Give_Traning_of_Soft_Skills_To_Villagers_Child=[];
						  let Enthusiastic_About_Green_Himalayas=[];
						  let Himalayan_Research=[];
axios.get('/view_event_article_ALL/')
      .then(res => {
        for(let x=0;x<res.data.event_data.length;x++)
            {
              if(res.data.event_data[x]['type']=='Current_situation')
              {
                Current_situation.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Tryst_with_nature')
              {
                Tryst_with_nature.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Towards_pragmatic')
              {
                Towards_pragmatic.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Enthusiastic_step')
              {
                Enthusiastic_step.push(res.data.event_data[x])
              }
              if(res.data.event_data[x]['type']=='Himalayan_roar')
              {
                Himalayan_roar.push(res.data.event_data[x])
              }
			   if(res.data.event_data[x]['type']=='Inflating_greenery')
              {
                Inflating_greenery.push(res.data.event_data[x])
              }
			   if(res.data.event_data[x]['type']=='Give_Traning_of_Soft_Skills_To_Villagers_Child')
              {
                Give_Traning_of_Soft_Skills_To_Villagers_Child.push(res.data.event_data[x])
              }
			   if(res.data.event_data[x]['type']=='Enthusiastic_About_Green_Himalayas')
              {
                Enthusiastic_About_Green_Himalayas.push(res.data.event_data[x])
              }
			   if(res.data.event_data[x]['type']=='Himalayan_Research')
              {
                Himalayan_Research.push(res.data.event_data[x])
              }
            }
        this.setState({
			           loading:false,
                       data: res.data.event_data,
                       event: event,
                       Current_situation: Current_situation,
						  Tryst_with_nature: Tryst_with_nature,
						  Towards_pragmatic: Towards_pragmatic,
						  Enthusiastic_step: Enthusiastic_step,
						  Himalayan_roar: Himalayan_roar,
						  Inflating_greenery:Inflating_greenery,
						  Give_Traning_of_Soft_Skills_To_Villagers_Child:Give_Traning_of_Soft_Skills_To_Villagers_Child,
						  Enthusiastic_About_Green_Himalayas:Enthusiastic_About_Green_Himalayas,
						  Himalayan_Research:Himalayan_Research

        })
      })
			
		}
  render() {
	  
let videoId = ['KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc'];
let height = '300';
let width = '100%';	 
	 
	  let items=['Current_situation','Tryst_with_nature','Towards_pragmatic','Enthusiastic_step','Himalayan_roar','Inflating_greenery','Give_Traning_of_Soft_Skills_To_Villagers_Child','Enthusiastic_About_Green_Himalayas','Himalayan_Research']
let event_items=[[],[],[],[],[],[],[],[],[]]
for(let i=0;i<items.length;i++)
{
let name=items[i]
  for(let x=0;x<this.state[name].length;x++)
        {
        event_items[i].push(

			<Col style={{textAlign:'center'}} xs={12} sm={12} md={4} lg={4} xl={4} onClick={()=>{this.setState({modal_data:this.state[name][x], modalShow:true})}}>
        <div style={{borderBottom:'2px solid #FFCC03',marginBottom:'1rem'}}>
											<Image style={{height:'200px',width:'100%'}} src={"/static/media/"+this.state[name][x]['img1']} thumbnail />
											 <br/>
											 <br/> 
											 <h4 className="family" style={{textAlign:'center', fontWeight:'700',marginBottom:'0'}}>{this.state[name][x]['subject']}</h4>
											 <p  style={{marginBottom:'0px'}} className="text-muted "><br/>{this.state[name][x]['des1'].substring(0, 100)+' [..]'}<span style={{color:'#f09217'}}>read more>></span>
											 <br/><br/>
											 </p>
        </div>
											</Col>

        )
        }
	  
}


  
  return <div>
	  
  <Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%',borderTop:'0px'}}>
			 <Row>
                <Col lg={12} sm={12} md={12} xl={12} className="himalaya_tab">
                   <Tabs defaultActiveKey="Current_situation" id="uncontrolled-tab-example"  >

                    <Tab eventKey="Current_situation" title="Current situation" >
					
								{/* <Row>
									<Col className='pad_cen' style={{textAlign:'center'}}>
									<Youtube_player videoId={videoId[0]} height={height} width={width}/>
									</Col>
									
								  </Row> */}
						    <Row style={{padding:'2%'}}>
								{event_items[0]}
							</Row>

                      </Tab>

					<Tab eventKey="Tryst_with_nature" title="Tryst with nature" >
								  
							<Row>
							{event_items[1]}
							</Row>
                      </Tab>
					  <Tab eventKey="Towards_pragmatic" title="Towards pragmatic" >
							
							<Row>
							{event_items[2]}
							</Row>
                      </Tab>
					  <Tab eventKey="Enthusiastic_step" title="Enthusiastic step" >
							
							<Row>
							{event_items[3]}
							</Row>
                      </Tab>
					  <Tab eventKey="Himalayan_roar" title="Himalayan roar" >
							
							<Row>
							{event_items[4]}
							</Row>
                      </Tab>
					  <Tab eventKey="Inflating_greenery" title="Inflating greenery" >
								  
								  <Row>
							{event_items[5]}
							</Row>
								  
							
                      </Tab>
					  <Tab eventKey="Give_Traning_of_Soft_Skills_To_Villagers_Child" title="Give Traning of Soft Skills To Villagers Child" >
							
							<Row>
							{event_items[6]}
							</Row>
                      </Tab>
					  
					  <Tab eventKey="Enthusiastic_About_Green_Himalayas" title="Enthusiastic About Green Himalayas" >
								  
								  <Row>
							{event_items[7]}
							</Row>
								  
							
                      </Tab>
					  
					  <Tab eventKey="Himalayan_Research" title="Himalayan Research" >
								  
								  <Row>
							{event_items[8]}
							</Row>
							
                      </Tab>
                    

                       </Tabs>
                </Col>
              </Row>
</Container>

 <MyVerticallyCenteredModal
        show={this.state.modalShow}
        data={this.state.modal_data}
        onHide={() => this.setState({modalShow:false})}
      />
</div>
  }
  
}


class Save_himalaya extends React.Component {
  render() {
	  
	  let videoId = 'ZSKMmCxoGHc';
let height = '300';
let width = '100%';

let src = "/static/media/home_images/";
                 //let images = ["3.jpg","28.jpg","6.jpg","7.jpg","10.jpg","13.jpg","15.jpg","16.jpg","18.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
                 let images = ["3.jpg"];
                 let elements = images.map((element,i,arr) => {
                   let style_obj ={
                     backgroundImage : "url("+src+element+")"
                   }
                   let cls = i==0?"carousel-item active":"carousel-item";
                   return <div className={cls} style={style_obj}>
                             <div className="carousel-container">
                               <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">WELCOME TO <span style={{borderLeft:'4px solid #18d26e',color:'#18d26e'}}>&nbsp;&nbsp;Social Perspective</span></h2>
                                 {/* <p className="animate__animated animate__fadeInUp">{params.sub_type.toUpperCase()}</p> */}
                                 {/* <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a> */}
                               </div>
                             </div>
                         </div>
                   
                 });
			return  <div style={{}}>
				<section id="intro" className="height_450px">
                     <div className="intro-container">
                       <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                 
                         <ol className="carousel-indicators"></ol>
                 
                         <div className="carousel-inner" role="listbox">            
                          {elements}
                         </div>
                 
                         <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                           <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                           <span className="sr-only">Previous</span>
                         </a>
                 
                         <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                           <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                         </a>
                 
                       </div>
                     </div>
                   </section>
			
								<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
								 <Row>
									<Col style={{textAlign:'center'}}>
									<h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'24px'}}>Our Social Perspective</h1>  
									</Col>
									</Row>
								</Container>		
								
								<Tab2/>
					</div>
			}
}

export default Save_himalaya;