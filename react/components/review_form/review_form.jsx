import React, { Component } from "react";
import './review_form.css';
import axios from 'axios';
import { Jumbotron, Container,Row,Col,Dropdown,Button,Form,Image } from 'react-bootstrap';
import $ from "jquery";
class Review_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		loading:false,
      name: '',
      category:'',
      rating:'',
      description:'',
      file: '',
      imagePreviewUrl: '',
      track_details:[],
      track_selected:[],
    };

    this.name_handleChange = this.name_handleChange.bind(this);
    this.category_handleChange = this.category_handleChange.bind(this);
    this.description_handleChange = this.description_handleChange.bind(this)
    this._handleImageChange = this._handleImageChange.bind(this)
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

   category_handleChange(event) {
                                this.setState({
                                  category: event.target.value
                                });
                               }

   description_handleChange(event) {

   if(event.target.value.length>=701)
   {
   let msg='You Entered '+event.target.value.length+' Characters, '
     alert(msg+'Only 700 Characters Are Allowed In Review Description..')
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

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
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
    data.append('image',this.state.file)
    data.append('name',this.state.name)
    data.append('category',this.state.category)
    data.append('description',this.state.description)
    data.append('track_id',this.state.track_selected[0]['id'])
    data.append('track_name',this.state.track_selected[0]['track_name'])
    data.append('rating',this.state.rating)

               let response_data={}
			  this.setState({loading:true})

     axios({
                                method: 'post',
                                url: '/submit_review/',
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
											  category:'',
											  rating:'',
											  description:'',
											  file: '',
											  imagePreviewUrl: '',
																														
											
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
  

  let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
 
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}><span style={{textTransform:'capitalize'}}>{selected[0]['track_name']}</span></Dropdown.Item>)
  }

  let item1=[]
  for (let x=1;x<=5;x++)
  {
  item1.push(<Dropdown.Item eventKey={x} onSelect={() =>{this.setState({rating:x})}}>{x}</Dropdown.Item>)
  }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image thumbnail roundedCircle variant="top" src={imagePreviewUrl} style={{height:'100px',width:'100px'}} />);
    } else {
      $imagePreview = (<Image thumbnail roundedCircle variant="top" style={{height:'100px',width:'100px'}} />);
    }

    return (
    <div className="review-form-sec">
      <div className="row">
        <div className="col-md-7 col-sm-7">
        <div className="title-sec-review">
          <div className="jumbotron">
              <h1>We value what <br />you guys says about us</h1>
              <h4 style={{marginTop:'60px', color:'#777'}}>Write a review for us</h4>
            </div>
            </div>
        </div>
        <div className="col-md-5 col-sm-5">

<Form className="review-form" onSubmit={this.handleSubmit}>
        <legend style={{textAlign:'center',textTransform:'uppercase'}}>Review Form</legend>

        <Row>
<Col style={{textAlign:'center'}}>
<p style={{display:'inline',fontSize:'1.1rem',color:'#777'}}>We <b>MOUNTAINS-ROVER</b> appreciate your reviews and work on accordingly to improve our services.</p>
</Col>
</Row>
        <Container fluid style={{padding:'4%', background:'whitesmoke',borderRadius:"5px",marginTop:'20px'}}>
        <Row>
        <Col>


<Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                <Form.Label className='label_style'>Name</Form.Label><br/>
            <Form.Control type="text" value={this.state.name} onChange={this.name_handleChange} className='form-control' style={{height:"40px"}}/>
            </Form.Group>

<div className="row">
  <div className="col-md-6 col-sm-6">
<Form.Group controlId="exampleForm.ControlInput2" style={{textAlign:'left'}}>
<Form.Label className='label_style'>Select Trek You Liked Most</Form.Label><br/>

                        {/* <Button variant="info" className='form-control' style={{textTransform:'uppercase',height:"40px"}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                        <Dropdown.Menu style={{maxHeight:'400px', overflow:'scroll'}}>
                          {item}
                        </Dropdown.Menu>
                      </Dropdown> */}
                       <div class="dropdown">
  <button style={{width:"100%"}} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}
  <span class="caret"></span></button>
  <ul class="dropdown-menu" style={{maxHeight:'300px', overflow:'scroll'}}>
    <li>{item}</li>
  </ul>
</div> 
</Form.Group>
</div>
<div className="col-md-6 col-sm-6">
<Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
          <Form.Label className='label_style'>Rate us Out Of 5</Form.Label><br/>
          {/* <Dropdown as={'Primary'}>
                        <Button variant="info" className='form-control' style={{textTransform:'uppercase',height:'40px'}}></Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                        <Dropdown.Menu >
                          
                        </Dropdown.Menu>
                      </Dropdown> */}
                       <div class="dropdown">
  <button style={{width:"100%"}} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.rating!=''?this.state.rating:'Select Rating'}
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li>{item1}</li>
  </ul>
</div> 
          </Form.Group>
</div>
</div>


<Form.Group controlId="exampleForm.ControlInput1" style={{textAlign:'left'}}>
                <Form.Label className='label_style'>Enter Service You Liked The Most (eg: FOOD, GUIDE etc.)</Form.Label><br/>
            <Form.Control type="text" value={this.state.category} onChange={this.category_handleChange} className='form-control' style={{height:"40px"}}/>
            </Form.Group>

          

 <Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>
          <Form.Label className='label_style'>Add Review Description (Limit 200 character)</Form.Label><br/>
            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.description_handleChange} className='form-control' />
</Form.Group>



        


<Form.Group controlId="exampleForm.ControlInput3" style={{textAlign:'left'}}>

        <Row>
        <Col>
        <label className="label_style">Upload Your Photo</label>
        <input type="file" onChange={(e)=>this._handleImageChange(e)}/>
        </Col>
        {/* <Col>
                                <div style={{width:'100%',textAlign:'center'}}>
                                  {$imagePreview}
                                    </div>
        </Col> */}
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
export default Review_form;