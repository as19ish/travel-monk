import React, { Component } from "react";
import axios from 'axios';
import './track_images.css';
import $ from 'jquery';
import '../../green_button.css'
import {Container,Row,Col,DropdownButton,Dropdown,Button,Card} from 'react-bootstrap';

class ImageDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images:[],track_details:[],track_selected:[]};
    this.select_track = this.select_track.bind(this);
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
  select_track(x)
 {

 

   axios.get('/delete_track_image/',{params:{track_id:x[0]['id']}})
              .then(res => {
                
                this.setState({images:res.data.result,track_selected:x})
              })
 }

onClickDeleteButton(index) {



const data=index
            axios({
                                method: 'post',
                                url: '/delete_track_image/',
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

                                      axios.get('/get_track_id_name/')
                                      .then(res => {
                                                    
                                                    this.setState({track_details:res.data.result,images:[],track_selected:[]})
                                                  })
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
                                event.preventDefault();
  }
  render() {
  

  let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={() =>{this.select_track(selected)}}>{selected[0]['track_name']}</Dropdown.Item>)
  }
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
                  <Row>
                    <Col style={{marginBottom:'3rem'}}>
                      <Dropdown as={'Primary'}>
                        <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select track'}</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                        <Dropdown.Menu >
                          {item}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <Row>

                          {this.state.images.map((image,index) => (
                          <Col>
                              <Track_image
                                buttonClick={this.onClickDeleteButton.bind(this,image)}
                                value={image}
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
              <Card.Img variant="top" style={{height:'15rem',width:'100%'}} src={"/static/media/"+props.value['track_image']} />
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
    this.state = {file: '',imagePreviewUrl: '',track_details:[],track_selected:[]};
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







  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    
    let type=typeof(this.state.file)
    
    if(this.state.track_selected.length==0)
    {
      alert('Please Select A Track First')
    }else if(type=='string')
    {
      alert('Please Choose A Image First')
    }else
    {
    const data = new FormData();
    data.append('image',this.state.file)
    data.append('track_id',this.state.track_selected[0]['id'])
    data.append('track_name',this.state.track_selected[0]['track_name'])

     axios({
                                method: 'post',
                                url: '/submit_trek_image/',
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

                                    this.setState({file: '',imagePreviewUrl: '',track_details:[],track_selected:[]})
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
    }

  }

  _handleImageChange(e) {
    e.preventDefault();

if(this.state.track_selected.length==0)
{
  alert('PLEASE SELECT A TREK FIRST')
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

  render() {
  

  let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}>{selected[0]['track_name']}</Dropdown.Item>)
  }
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
                    <Col>
                      <Dropdown as={'Primary'}>
                        <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Trek'}</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                        <Dropdown.Menu >
                          {item}
                        </Dropdown.Menu>
                      </Dropdown>


                    </Col>
                    <Col>
                    <div className="previewComponent">
                       <h3 className='image_head'>Image Preview & Upload</h3>
                        <form onSubmit={(e)=>this._handleSubmit(e)}>
                              <input className="fileInput" type="file" title={this.state.track_selected.length==0?'Please Select Trek First':''} onChange={(e)=>this._handleImageChange(e)}disabled={this.state.track_selected.length==0?true:false}/>
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