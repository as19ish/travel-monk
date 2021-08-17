import React, { Component } from "react";
import './trekker_story_form.css';
import axios from 'axios';
import { Jumbotron, Container,Row,Col,Dropdown,Button,Form,Image } from 'react-bootstrap';
import $ from "jquery";
class Trekker_story_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  loading:false,
      name: '',
      description:'',
      file: '',
      file1:'',
      imagePreviewUrl: '',
      imagePreviewUrl1: '',
      track_details:[],
      track_selected:[],
    };

    this.name_handleChange = this.name_handleChange.bind(this);
    this.description_handleChange = this.description_handleChange.bind(this)
    this._handleImageChange = this._handleImageChange.bind(this)
    this._handleImageChange1 = this._handleImageChange1.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount()
  {
        axios.get('/get_track_id_name/')
              .then(res => {
                       this.setState({track_details:res.data.result})
              })
  }

  name_handleChange(event) {
                                this.setState({
                                  name: event.target.value
                                });
                               }

   description_handleChange(event) {

    if(event.target.value.length>=5001)
   {
   let msg='You Entered '+event.target.value.length+' Characters, '
     alert(msg+'Only 5000 Characters Are Allowed In Review Description..')
   }
   else
   {
   this.setState({
                                  description: event.target.value
                                });
   }

                               }
   _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let max_size = 2 * 1024 * 1024;
    if(file.size >  max_size)
    {
     alert('File size exceeded limit 2 MB.');
     this.setState({
        file: '',
      });
    }
    else
    {
      this.setState({
        file: file,
      });
    
    }
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  _handleImageChange1(e) {
    e.preventDefault();
   let reader = new FileReader();
    let file = e.target.files[0];
    let max_size = 2 * 1024 * 1024;
  if(file.size >  max_size)
    {
     alert('File size exceeded limit 2 MB.');
     this.setState({
        file1: '',
      });
    }
    else
    {
      this.setState({
        file1: file,
      });
    
    }
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl1: reader.result
      });
    }

    reader.readAsDataURL(file)

  }


  handleSubmit(event) {



  let call_API=true

  for (let key in this.state)
    {
    if(key=='loading')
    {

    }else if(this.state[key]=='')
     {
     call_API=false
     }
    }

    if(call_API==false)
    {
         let a=' All Fields Are Required'
         alert(a)
         event.preventDefault();
    }

if(call_API==true)
{

let data = new FormData();
    data.append('profile_image',this.state.file)
    data.append('trek_image',this.state.file1)
    data.append('name',this.state.name)
    data.append('description',this.state.description)
    data.append('track_id',this.state.track_selected[0]['id'])
    data.append('track_name',this.state.track_selected[0]['track_name'])

               let response_data={}
			   
			   this.setState({loading:true})

     axios({
                                method: 'post',
                                url: '/submit_trekker_story/',
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
										  name: '',
										  description:'',
										  file: '',
										  file1:'',
										  imagePreviewUrl: '',
										  imagePreviewUrl1: '',
																				
											
										})
										
										})

                                .catch(function (response) {
                                    //handle error
                                  
                                });


//$(".query_form")[0].reset();

    event.preventDefault();
}
  }

  render() {

  console.log('state = ',this.state);
  let color = this.state.file == ''?'red':'black';
  let color_style = {color: color, fontSize:'16px'};
  
  let color1 = this.state.file1 == ''?'red':'black';
  let color_style1 = {color: color1, fontSize:'16px'};
  
  console.log('color1 = ',color_style);
  console.log('color2 = ',color_style1);
  
  let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}><span style={{textTransform:'capitalize'}}>{selected[0]['track_name']}</span></Dropdown.Item>)
  }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image thumbnail roundedCircle variant="top" src={imagePreviewUrl} style={{height:'100px',width:'100px'}} />);
    } else {
      $imagePreview = (<Image thumbnail roundedCircle variant="top" style={{height:'100px',width:'100px'}} />);
    }

    let {imagePreviewUrl1} = this.state;
    let $imagePreview1 = null;
    if (imagePreviewUrl1) {
      $imagePreview1 = (<Image thumbnail variant="top" src={imagePreviewUrl1} style={{height:'100px',width:'100px'}} />);
    } else {
      $imagePreview1 = (<Image thumbnail variant="top" style={{height:'100px',width:'100px'}} />);
    }

    return (
    <div style={{marginTop: '100px',height: '800px',padding:'2em'}}>
      <div className="row">
        <div className="col-md-7 col-sm-12">
      <h2 style={{textTransform:'uppercase'}}>Trekker Story Form</h2>
      <Row style={{marginTop: '50px',marginBottom: '30px'}}>
<Col>
<p style={{display:'inline',fontSize:'20px'}}>We <b>MOUNTAINS-ROVER</b> Welcome You , Please Share Your Experience Here.</p>
</Col>
</Row>
</div>
<div className="col-md-5 col-sm-12">
<Form onSubmit={this.handleSubmit} className="trekker-story-form" >
        


        <Container fluid style={{padding:'1em', background:'whitesmoke',borderRadius:'5px'}}>
        <Row>
        <Col>


<Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                <Form.Label className='label_style'>Full Name</Form.Label><br/>
            <input className="form-control mb-20" type="text" value={this.state.name} onChange={this.name_handleChange} />
            </Form.Group>

<Form.Group controlId="exampleForm.ControlInput2" style={{textAlign:'left'}}>
<Form.Label className='label_style'>Select Trek</Form.Label><br/>
<Dropdown as={'Primary'}>
                        <Button variant="info" style={{textTransform:'uppercase',width:'80%'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" style={{width: '20%'}}  />
                        <Dropdown.Menu style={{maxHeight:'400px', overflow:'scroll'}}>
                          {item}
                        </Dropdown.Menu>
                      </Dropdown>
</Form.Group>


 <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
          <Form.Label className='label_style'>Add Trek Story Description (Limit 200 character)</Form.Label><br/>
            <Form.Control as="textarea" cols="5" value={this.state.description} onChange={this.description_handleChange} className="mb-20" style={{width:'100%'}} />
</Form.Group>



        </Col>
        <Col>


<Form.Group controlId="exampleForm.ControlInput3" className="mb-20" style={{textAlign:'left'}}>

        <Row>
        <Col xs={12} sm={12} md={12} lg={6} >
        <label className="label_style">Upload Your Profile Photo (<span style={color_style}>size limit 2 MB</span>)</label>
        <input type="file" onChange={(e)=>this._handleImageChange(e)}/>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
                                <div style={{width:'100%',textAlign:'center'}}>
                                  {$imagePreview}
                                    </div>
        </Col>
        </Row>
</Form.Group>

    <Form.Group controlId="exampleForm.ControlInput1" className="mb-20" style={{textAlign:'left'}}>
       <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
        <label className="label_style">Upload Your Trek Photo (<span style={color_style1}>size limit 2 MB</span>)</label>
        <input type="file" onChange={(e)=>this._handleImageChange1(e)}/>
        </Col>
      
        </Row>

   </Form.Group>




        </Col>
        </Row>
        <Row>
        <Col>

        <div id='success_message' className="alert alert-success" role="alert" style={{display: 'none',borderRadius:'15px'}}>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <div className="form_success_msg">
  <strong>Success!</strong>
  </div>
  <div className="form_success_msg">
  <p>Thank-You. Your Review Means A Lot To Us.</p>
  </div>
</div>

        <div style={{textAlign:'center'}}>
          <Button variant="success" type="submit" disabled={this.state.loading}>{this.state.loading?'In Process..':'Submit'}</Button>
          </div>
        </Col>
        </Row> 
        </Container>



        </Form>
        </div>
</div>
</div>

    )
  }
}
export default Trekker_story_form;