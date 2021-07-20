import React, { Component } from "react";
import axios from 'axios';
import './blogs.css';
import $ from 'jquery';
import '../../green_button.css'
import {Container,Row,Col,DropdownButton,Dropdown,Button,Card,InputGroup,FormControl} from 'react-bootstrap';

class BlogDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {blogs:[],blog_selected:[]};
    this.delete_blog = this.delete_blog.bind(this);
  }
  componentDidMount()
  {
    
        axios.get('/get_blog_id_title/')
              .then(res => {
                
                this.setState({blogs:res.data.result})
              })
  }

 componentDidUpdate()
 {
   
     axios.get('/get_blog_id_title/')
              .then(res => {
                
                
                
                
                if(this.state.blogs.length!=res.data.result.length)
                {
                  this.setState({blogs:res.data.result})
                }

              })

 }
  delete_blog(x)
 {

 
  const data=x
            axios({
                                method: 'post',
                                url: '/delete_blog/',
                                data:data
                                })
                                .then(response=> {
                                    
                                    document.getElementById('success_message26').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert26").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert26").fadeTo(500, 1)
                                                                     document.getElementById('success_message26').style.display='none';

                                        });
                                    }, 2000);
                                                     axios.get('/get_blog_id_title/').then(res => {
                                                        
                                                        this.setState({blogs:res.data.result,blog_selected:[]})
                                                      })

				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
                                event.preventDefault();
  }
  render() {
  

  let item=[]
  for (let x=0;x<this.state.blogs.length;x++)
  {
  let selected=[this.state.blogs[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={() =>{this.delete_blog(selected)}}>{selected[0]['blog_title']}</Dropdown.Item>)
  }
    return (
    <div>
   <Container className='admin_div' style={{padding:'2rem'}}>
     <div style={{textAlign:'center'}}>
        <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>delete Latest Update</span>
      </div>
          <div id='success_message26' className="alert26 alert-success26" style={{display: 'none',borderRadius:'15px'}}>
          <div className="form_success_msg26">
          <strong>Success!</strong>
          </div>
        </div>
                  <Row>
                    <Col style={{marginBottom:'3rem'}}>
                      <Dropdown as={'Primary'}>
                        <Button variant="info" style={{width:'200px',textTransform:'uppercase'}}>{this.state.blog_selected.length!=0?this.state.blog_selected[0]['blog_title']:'Select blog'}</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                        <Dropdown.Menu >
                          {item}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Container>
                </div>
    )
  }
}


//main component....................................
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '',title:'',subject:'',details:''};
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
    
    if(this.state.details.length==0)
    {
      alert('Please Select Details')
    }else
    if(this.state.subject.length==0)
    {
      alert('Please Select A Subject')
    }else if(this.state.title.length==0)
    {
      alert('Please Select A Title')
    }else if(type=='string')
    {
      alert('Please Choose A Image')
    }else
    {
    const data = new FormData();
    data.append('image',this.state.file)
    data.append('title',this.state.title)
    data.append('subject',this.state.subject)
    data.append('details',this.state.details)

     axios({
                                method: 'post',
                                url: '/add_blog/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    document.getElementById('success_message25').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert25").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert25").fadeTo(500, 1)
                                                                     document.getElementById('success_message25').style.display='none';

                                        });
                                    }, 4000);

                                    this.setState({file: '',imagePreviewUrl: '',title:'',subject:'',details:''})
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
    }

  }
  handleChange(event)
  {
  
      this.setState({[event.target.name]:event.target.value})
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
   <Container className='admin_div' style={{padding:'2rem'}}>
   <div style={{textAlign:'center'}}>
        <span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>Add Latest Update</span>
        </div>
           <div id='success_message25' className="alert25 alert-success25" style={{display: 'none',borderRadius:'15px'}}>
          <div className="form_success_msg25">
          <strong>Success!</strong>
          </div>
        </div>
                   <Row>
                   <Col>

                          <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text style={{background:'#17a2b8',color:'white'}} id="basic-addon1">Title</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  name="title"
                                  aria-label="Title"
                                  aria-describedby="basic-addon1"
                                  value={this.state.title}
                                  onChange={(e)=>this.handleChange(e)}
                                />
                                 <InputGroup.Prepend>
                                  <InputGroup.Text style={{background:'#17a2b8',color:'white'}}  id="basic-addon1">Subject</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  name="subject"
                                  aria-label="Subject"
                                  aria-describedby="basic-addon1"
                                  value={this.state.subject}
                                  onChange={(e)=>this.handleChange(e)}
                                />
                          </InputGroup>

                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text style={{background:'#17a2b8',color:'white'}}>Details</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="details" as="textarea" aria-label="With textarea" value={this.state.details} onChange={(e)=>this.handleChange(e)}/>
                          </InputGroup>
                   </Col>
                      <Col>
                    <div className="previewComponent">
                       <h3 className='image_head'>Image Preview & Upload</h3>
                        <form onSubmit={(e)=>this._handleSubmit(e)}>
                              <input className="fileInput" type="file"  onChange={(e)=>this._handleImageChange(e)}/>
                           <button className="myButton"
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Submit Latest Update</button>
                        </form>
                        <div id='Image_Preview' className="imgPreview">
                          {$imagePreview}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <div>
               <BlogDelete/>

            </div>
    </div>
    )
  }
}

export default Blog;