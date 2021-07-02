import React, { Component } from "react";
import './events_form.css';
import axios from 'axios';
import { Jumbotron, Container,Row,Col,Dropdown,Button,Form,Image } from 'react-bootstrap';
import $ from "jquery";
//main component....................................
class Event_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	loading:false,
    track_details:[],
    track_selected:[],
    type_selected:[],
    subject:'',
    file: '',
    imagePreviewUrl: '',
    file1: '',
    imagePreviewUrl1: '',
    file2: '',
    imagePreviewUrl2: '',
    file3: '',
    imagePreviewUrl3: '',
    sub1:'',
    sub2:'',
    sub3:'',
    sub4:'',
    des1:'',
    des2:'',
    des3:'',
    des4:''
    };

    this.sub1_handleChange = this.sub1_handleChange.bind(this)
    this.sub2_handleChange = this.sub2_handleChange.bind(this)
    this.sub3_handleChange = this.sub3_handleChange.bind(this)
    this.sub4_handleChange = this.sub4_handleChange.bind(this)

    this.des1_handleChange = this.des1_handleChange.bind(this)
    this.des2_handleChange = this.des2_handleChange.bind(this)
    this.des3_handleChange = this.des3_handleChange.bind(this)
    this.des4_handleChange = this.des4_handleChange.bind(this)

    this._handleImageChange = this._handleImageChange.bind(this)
    this._handleImageChange1 = this._handleImageChange1.bind(this)
    this._handleImageChange2 = this._handleImageChange2.bind(this)
    this._handleImageChange3 = this._handleImageChange3.bind(this)

    this.subject_handleChange = this.subject_handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount()
  {
     axios.get('/get_track_id_name/')
              .then(res => {
                
                this.setState({track_details:res.data.result})
              })
  }

   componentDidUpdate()
 {
   
     axios.get('/get_track_id_name/')
              .then(res => {
                
                
                
                
                let check=false
                if(this.state.track_details.length!=res.data.result.length)
                {
                  this.setState({track_details:res.data.result})
                }else{

                for(let i=0;i<res.data.result.length;i++)
                {
                  if(this.state.track_details[i]['track_name']!=res.data.result[i]['track_name'])
                  {
                    check=true
                  }
                }

                if(check==true)
                {
                
                     this.setState({track_details:res.data.result})

                }

                }

              })
 }

 handleSubmit(e) {


    let call_API=true

  for (let key in this.state)
    {
    if(key=='track_selected' || key=='loading')
    {

    }else if(this.state[key]=='')
     {
     call_API=false
     }
    }

    if(call_API==false)
    {
         let a=' All Fields Are Required Except Treck ID'
         alert(a)
         event.preventDefault();
    }

if(call_API==true)
{

let data = new FormData();
    data.append('type',this.state.type_selected[0])
    data.append('subject',this.state.subject)
    if(this.state.track_selected.length==0)
    {
      data.append('track_id','none')
    }else{
    data.append('track_id',this.state.track_selected[0]['id'])
    }

    data.append('image1',this.state.file)
    data.append('image2',this.state.file1)
    data.append('image3',this.state.file2)
    data.append('image4',this.state.file3)
    data.append('sub1',this.state.sub1)
    data.append('sub2',this.state.sub2)
    data.append('sub3',this.state.sub3)
    data.append('sub4',this.state.sub4)
    data.append('des1',this.state.des1)
    data.append('des2',this.state.des2)
    data.append('des3',this.state.des3)
    data.append('des4',this.state.des4)
	
	 this.setState({loading:true})

               let response_data={}

     axios({
                                method: 'post',
                                url: '/submit_event_article/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert").fadeTo(500, 1)
                                                                     document.getElementById('success_message').style.display='none';

                                        });
                                    }, 500);
									
									this.setState({
										loading:false,
										track_details:[],
										track_selected:[],
										type_selected:[],
										subject:'',
										file: '',
										imagePreviewUrl: '',
										file1: '',
										imagePreviewUrl1: '',
										file2: '',
										imagePreviewUrl2: '',
										file3: '',
										imagePreviewUrl3: '',
										sub1:'',
										sub2:'',
										sub3:'',
										sub4:'',
										des1:'',
										des2:'',
										des3:'',
										des4:''
									})

				                        
										
										
										})

                                .catch(function (response) {
                                    //handle error
                                    
                                });

    event.preventDefault();
}

  }

  subject_handleChange(event)
  {this.setState({subject: event.target.value});}

  sub1_handleChange(event)
    {  this.setState({sub1: event.target.value}); }

  sub2_handleChange(event)
  {  this.setState({sub2: event.target.value}); }

  sub3_handleChange(event)
  {  this.setState({sub3: event.target.value}); }

   sub4_handleChange(event)
  {  this.setState({sub4: event.target.value}); }

  des1_handleChange(event)
  {  this.setState({des1: event.target.value}); }

  des2_handleChange(event)
  {  this.setState({des2: event.target.value}); }

  des3_handleChange(event)
  {  this.setState({des3: event.target.value}); }

  des4_handleChange(event)
  {  this.setState({des4: event.target.value}); }

 _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

   _handleImageChange1(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file1: file,
        imagePreviewUrl1: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

   _handleImageChange2(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file2: file,
        imagePreviewUrl2: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  _handleImageChange3(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file3: file,
        imagePreviewUrl3: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
  

  let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image thumbnail variant="top" src={imagePreviewUrl} style={{height:'300px',width:'300px'}} />);
    } else {
      $imagePreview = (<Image thumbnail variant="top" style={{height:'300px',width:'300px'}} />);
    }

     let {imagePreviewUrl1} = this.state;
    let $imagePreview1 = null;
    if (imagePreviewUrl1) {
      $imagePreview1 = (<Image thumbnail variant="top" src={imagePreviewUrl1} style={{height:'300px',width:'300px'}} />);
    } else {
      $imagePreview1 = (<Image thumbnail variant="top" style={{height:'300px',width:'300px'}} />);
    }

     let {imagePreviewUrl2} = this.state;
    let $imagePreview2 = null;
    if (imagePreviewUrl2) {
      $imagePreview2 = (<Image thumbnail variant="top" src={imagePreviewUrl2} style={{height:'300px',width:'300px'}} />);
    } else {
      $imagePreview2 = (<Image thumbnail variant="top" style={{height:'300px',width:'300px'}} />);
    }

     let {imagePreviewUrl3} = this.state;
    let $imagePreview3 = null;
    if (imagePreviewUrl3) {
      $imagePreview3 = (<Image thumbnail variant="top" src={imagePreviewUrl3} style={{height:'300px',width:'300px'}} />);
    } else {
      $imagePreview3 = (<Image thumbnail variant="top" style={{height:'300px',width:'300px'}} />);
    }


  let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}>{selected[0]['track_name']}</Dropdown.Item>)
  }

  let item1=[]
  let values=['Event','Blog','Info','Article','Other','Current_situation','Tryst_with_nature','Towards_pragmatic','Enthusiastic_step','Himalayan_roar','Inflating_greenery','Give_Traning_of_Soft_Skills_To_Villagers_Child','Enthusiastic_About_Green_Himalayas','Himalayan_Research']
  for (let x=0;x<values.length;x++)
  {
  let data=values[x]
  
  item1.push(<Dropdown.Item eventKey={data} onSelect={(data) =>{this.setState({type_selected:[data]})}}>{values[x]}</Dropdown.Item>)
  }
    return (


      <Form onSubmit={this.handleSubmit} style={{padding:'2% 5%'}}>
        <legend style={{textTransform:'uppercase'}}>Event/Article Form</legend>


        <Container fluid style={{padding:'4%', background:'whitesmoke',borderRadius:'50px'}}>
         <div style={{textAlign:'center'}}>
        <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>add event / article</span>
        </div>
           <div id='success_message25' className="alert25 alert-success25" style={{display: 'none',borderRadius:'15px'}}>
          <div className="form_success_msg25">
          <strong>Success!</strong>
          </div>
        </div>
<br/>
<br/>
<br/>
<br/>
<hr/>
      <Row>
        <Col>
                <Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                   <Form.Group controlId="exampleForm.ControlInput2" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>1. Select Type</Form.Label><br/>
                    <Dropdown as={'Primary'}>
                                            <Button variant="info" className='width_50_in_large' style={{textTransform:'uppercase',width:'30%'}}>{this.state.type_selected.length!=0?this.state.type_selected[0]:'Select Type'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                                            <Dropdown.Menu >
                                              {item1}
                                            </Dropdown.Menu>
                                          </Dropdown>
                </Form.Group>
                          </Form.Group>
        </Col>
        <Col>
               <Form.Group controlId="exampleForm.ControlInput2" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>2. Select Trek</Form.Label><br/>
                    <Dropdown as={'Primary'}>
                                            <Button variant="info" className='width_50_in_large' style={{textTransform:'uppercase',width:'30%'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                                            <Dropdown.Menu >
                                              {item}
                                            </Dropdown.Menu>
                                          </Dropdown>
                </Form.Group>

        </Col>

        <Col>
              <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
                          <Form.Label className='label_style'>3.Title</Form.Label><br/>
                            <Form.Control type="text" value={this.state.subject} onChange={this.subject_handleChange} style={{width:'100%'}} />
                </Form.Group>
        </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <Row>
                    <Col>
                        <h5 style={{marginTop:'10%'}}>4.1. Upload Photo</h5>
                        <input type="file" onChange={(e)=>this._handleImageChange(e)}/>
                     </Col>
                     <Col>
                        <div style={{width:'100%',textAlign:'center'}}>
                           {$imagePreview}
                         </div>
                     </Col>

                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>4.2.Subject</Form.Label><br/>
                    <Form.Control type="text" value={this.state.sub1} onChange={this.sub1_handleChange} className='width_50_in_large' style={{width:'30%'}}/>
                    </Form.Group>
                </Col>

                <Col>
                   <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
                          <Form.Label className='label_style'>4.3.Description</Form.Label><br/>
                            <Form.Control as="textarea" rows="5" cols="15" value={this.state.des1} onChange={this.des1_handleChange} style={{width:'100%'}} />
                    </Form.Group>
                </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <Row>
                    <Col>
                        <h5 style={{marginTop:'10%'}}>5.1. Upload Photo</h5>
                        <input type="file" onChange={(e)=>this._handleImageChange1(e)}/>
                     </Col>
                     <Col>
                        <div style={{width:'100%',textAlign:'center'}}>
                           {$imagePreview1}
                         </div>
                     </Col>

                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>5.2.Subject</Form.Label><br/>
                    <Form.Control type="text" value={this.state.sub2} onChange={this.sub2_handleChange} className='width_50_in_large' style={{width:'30%'}}/>
                    </Form.Group>
                </Col>

                <Col>
                   <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
                          <Form.Label className='label_style'>5.3.Description</Form.Label><br/>
                            <Form.Control as="textarea" rows="5" cols="15" value={this.state.des2} onChange={this.des2_handleChange} style={{width:'100%'}} />
                    </Form.Group>
                </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
         <Row>
                    <Col>
                        <h5 style={{marginTop:'10%'}}>6.1. Upload Photo</h5>
                        <input type="file" onChange={(e)=>this._handleImageChange2(e)}/>
                     </Col>
                     <Col>
                        <div style={{width:'100%',textAlign:'center'}}>
                           {$imagePreview2}
                         </div>
                     </Col>

                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>6.2.Subject</Form.Label><br/>
                    <Form.Control type="text" value={this.state.sub3} onChange={this.sub3_handleChange} className='width_50_in_large' style={{width:'30%'}}/>
                    </Form.Group>
                </Col>

                <Col>
                   <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
                          <Form.Label className='label_style'>6.3.Description</Form.Label><br/>
                            <Form.Control as="textarea" rows="5" cols="15" value={this.state.des3} onChange={this.des3_handleChange} style={{width:'100%'}} />
                    </Form.Group>
                </Col>
        </Row>

        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
         <Row>
                    <Col>
                        <h5 style={{marginTop:'10%'}}>7.1. Upload Photo</h5>
                        <input type="file" onChange={(e)=>this._handleImageChange3(e)}/>
                     </Col>
                     <Col>
                        <div style={{width:'100%',textAlign:'center'}}>
                           {$imagePreview3}
                         </div>
                     </Col>

                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                    <Form.Label className='label_style'>7.2.Subject</Form.Label><br/>
                    <Form.Control type="text" value={this.state.sub4} onChange={this.sub4_handleChange} className='width_50_in_large' style={{width:'30%'}}/>
                    </Form.Group>
                </Col>

                <Col>
                   <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
                          <Form.Label className='label_style'>7.3.Description</Form.Label><br/>
                            <Form.Control as="textarea" rows="5" cols="15" value={this.state.des4} onChange={this.des4_handleChange} style={{width:'100%'}} />
                    </Form.Group>
                </Col>
        </Row>

        <br/>
        <br/>
        <hr/>

         <Row>
        <Col>

        <div id='success_message' className="alert alert-success" role="alert" style={{display: 'none',borderRadius:'15px'}}>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <div className="form_success_msg">
  <strong>Success!</strong>
  </div>
  <div className="form_success_msg">
  <p>Submitted Successfully..</p>
  </div>
</div>

        <div style={{textAlign:'center'}}>
          <Button variant="success" type="submit" disabled={this.state.loading}>{this.state.loading?'In Process..':'Submit'}</Button> 
          </div>
        </Col>
        </Row>

        </Container>



        </Form>
    )
  }
}

export default Event_form;