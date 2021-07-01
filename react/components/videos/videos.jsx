import React, {Component,Suspense} from 'react';
import './videos.css'
import {Container, Row,Col,Image,Tabs, Tab,Card,Modal,Button} from 'react-bootstrap';
const Youtube_player = React.lazy(() => import('../youtube/youtube'));
import axios from 'axios';

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
			this.state={}					
		}
	
  render() { 
  
  let height = '300';
  let width = '100%';
  let tab_data=[]
  let keys=Object.keys(this.props)
  let def=Object.keys(this.props)[0]
  for (let x=0; x<keys.length; x++)
  {
	  	  tab_data.push(
				  <Tab eventKey={keys[x]} title={keys[x]}>							
										<Row style={{padding:'2%'}}>
										
										{
											this.props[keys[x]].map((data,index)=>
											
											<Col xs={12} sm={12} md={4} lg={4} xl={4} >
											<Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
												<Youtube_player videoId={data} height={height} width={width}/>
											</Suspense>
											</Col>
											
											)
										}										
											
										  </Row>
							  </Tab>

				  )
		  
  }
  
  return <Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%',borderTop:'0px'}}>
			 <Row>
                <Col lg={12} sm={12} md={12} xl={12} className="himalaya_tab">
                   <Tabs defaultActiveKey={def} id="uncontrolled-tab-example"  >				   
				   {tab_data}
					</Tabs>
                </Col>
              </Row>
		</Container>
  }
  
}


class Videos extends React.Component {
  render() {
	  
	  let data ={'Latest videos':['KM67Q8c56lc','KM67Q8c56lc','KM67Q8c56lc'],
	              'Best trek videos':['KM67Q8c56lc'],
				  'Snow trek videos':['9IH1DckaFFY','I3MUDTgREww'],
				  'Meaadows trek videos':['mNWwe3mokRs','oPZ2Q_AaajQ'],
				  'Tea house trek videos':['olJbD9KSg2M'],
				  'Rafting videos':['ZG8TBtKiz1w'],
				  'Temple videos':['a8VdP_JLPiA','sc7ykT_QMjo'],
				  'Peak climbing videos':['0d7BpltOJew'],
				  'Other adventure activities videos':['Ow-gnn4nE3k','5Crxng_JUfs']				  
				  }

			return  <div style={{}}>
			
								<Container className='border_bottom' style={{background:'#f8f9fa',padding:'1%'}}>
								 <Row>
									<Col style={{textAlign:'center'}}>
									<h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'24px'}}>Videos</h1>  
									</Col>
									</Row>
								</Container>		
								
								<Tab2 {...data}/>
					</div>
			}
}

export default Videos;