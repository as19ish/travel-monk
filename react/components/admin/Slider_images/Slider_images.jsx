import React, { Component } from "react";
import axios from 'axios';
import './Slider_images.css';
import $ from 'jquery';
import '../../green_button.css'
import {Container,Row,Col,DropdownButton,Dropdown,Button,Card,Form} from 'react-bootstrap';

class ImageDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount()
  {
    
        
  }

 componentDidUpdate()
 {
   

 }
  refresh(x)
 {

   axios.get('/delete_slider_image/',)
              .then(res => {                
                this.setState({data:res.data.result})
              })
 }

onClickDeleteButton(index) {

const data=index
            axios({
                                method: 'post',
                                url: '/delete_slider_image/',
                                data:data
                                })
                                .then(response=> {
                                    
                                    document.getElementById('success_message11').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert11").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert11").fadeTo(500, 1)
                                                                     document.getElementById('success_message11').style.display='none';

                                        });
                                    }, 2000);

                                    axios.get('/delete_slider_image/',)
                                    .then(res => {                
                                      this.setState({data:res.data.result})
                                    })
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
                                event.preventDefault();
  }
  render() {
  
console.log('data!!!!! = ',this.state.data);
    return (
    <div>
    <div id='success_message11' className="alert11 alert-success11" style={{display: 'none',borderRadius:'15px'}}>
          <div className="form_success_msg11">
          <strong>Success!</strong>
          </div>
        </div>
   <Container className='admin_div' style={{padding:'2rem'}}>
     <div style={{textAlign:'center'}}>
        <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>delete images</span>
      </div>
      <Row><Col>
      <Button onClick={this.refresh}>Refresh</Button>
      </Col></Row>
                  <Row>
                          {this.state.data.map((image,index) => (
                          <Col>
                              <Track_image
                                buttonClick={this.onClickDeleteButton.bind(this,image)}
                                value={image['image']}
                                key={index}
                                />
                              </Col>
                            ))}
                  </Row>
                </Container>
                </div>
    )
  }
}
function Track_image(props) {

  return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" style={{height:'15rem',width:'100%'}} src={"/static/media/"+props.value} />
              <Card.Body>
                <Card.Title>{props.value['track_image']}</Card.Title>
                <Button className='myButton' style={{color:'red'}} type='button' onClick={props.buttonClick}>Delete</Button>
              </Card.Body>
            </Card>

  );
}


//main component....................................
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '',Title:'', Detail:''};
  }
  componentDidMount()
  {
    
  }


  componentDidUpdate()
 {
 }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    
    let type=typeof(this.state.file)
    
    if(this.state.Title=='')
    {
      alert('Please Select A Title First')
    }else if(type=='string')
    {
      alert('Please Choose A Image First')
    }else
    {
    const data = new FormData();
    data.append('image',this.state.file)
    data.append('title',this.state.Title)
    data.append('detail',this.state.Detail)

     axios({
                                method: 'post',
                                url: '/submit_slider_image/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message4').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert4").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert4").fadeTo(500, 1)
                                                                     document.getElementById('success_message4').style.display='none';

                                        });
                                    }, 4000);

                                    this.setState({file: '',imagePreviewUrl: '',Title:'',Detail:''})
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
    }

  }

  _handleImageChange(e) {
    e.preventDefault();

if(this.state.Title=='')
{
  alert('PLEASE SELECT A Title FIRST')
}else if(this.state.Detail=='')
{
  alert('PLEASE SELECT A Detail FIRST')
}
else
{
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

  }

  handleChangeT(event,field)
 {     
    this.setState({Title:event.target.value})
 }

 handleChangeD(event,field)
 {     
    this.setState({Detail:event.target.value})
 }

  render() {
  
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
    <div>

    <div id='success_message4' className="alert4 alert-success4" style={{display: 'none',borderRadius:'15px'}}>
          <div className="form_success_msg4">
          <strong>Success!</strong>
          </div>
        </div>
   <Container className='admin_div' style={{padding:'2rem'}}>
   <div style={{textAlign:'center'}}>
        <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>add images</span>
        </div>
                   <Row>
                   <Col><Form.Control as={'input'} value={this.state.Title} placeholder={'Title'} onChange={(event)=>this.handleChangeT(event)} required/>
                   <Form.Control as={'textarea'} value={this.state.Detail} placeholder={'Detail'} onChange={(event)=>this.handleChangeD(event)} required/>
                   </Col>
                    <Col>
                    <div className="previewComponent">
                       <h3 className='image_head'>Image Preview & Upload</h3>
                        <form onSubmit={(e)=>this._handleSubmit(e)}>
                              <input className="fileInput" type="file" title={''} onChange={(e)=>this._handleImageChange(e)}/>
                           <button className="myButton"
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                        </form>
                        <div id='Image_Preview' className="imgPreview">
                          {$imagePreview}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <div>
                <ImageDelete/>

            </div>
    </div>
    )
  }
}

export default ImageUpload;