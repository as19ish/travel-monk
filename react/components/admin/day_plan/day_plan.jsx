import React, { Component } from "react";
import './day_plan.css'
import axios from 'axios'
import {Container,Row,Col,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import $ from 'jquery'
import '../../green_button.css'

class Delete_Day_plan extends React.Component {
  constructor() {
    super();
    this.state={track_details:[],track_selected:[],alert:''}
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount()
  {
    
    this.setState({track_details:this.props.data})
  }
  componentDidUpdate()
 {
   
   let check=false
                if(this.state.track_details.length!=this.props.data.length)
                {
                  this.setState({track_details:this.props.data})
                }else{

                for(let i=0;i<this.props.data.length;i++)
                {
                  if(this.state.track_details[i]['track_name']!=this.props.data[i]['track_name'])
                  {
                    check=true
                  }
                }

                if(check==true)
                {
                
                     this.setState({track_details:this.props.data})

                }

                }
 }
 handleClick(event)
 {
  
  event.preventDefault()
  if(this.state.track_selected.length==0)
  {
    alert('Please Select A Trek First')
  }
  else
  {
    const data={track_info:this.state.track_selected}
    axios({
                                method: 'post',
                                url: '/delete_day_plan/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    let message=response.data.result
                                    document.getElementById('success_message20').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert20").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert20").fadeTo(500, 1)
                                                                     document.getElementById('success_message20').style.display='none';

                                        });
                                    }, 2000);

                                    this.setState({track_selected:[],alert:message})
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
  }
 }
 render()
 {
 
 
  let item=[]
 for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}>{selected[0]['track_name']}</Dropdown.Item>)
  }
 return(
<div >

<div id='success_message20' className="alert20 alert-success20" style={{display: 'none',borderRadius:'15px'}}>
                  <div className="form_success_msg20" style={{textAlign:'center'}}>
                  <strong>{this.state.alert}</strong>
                  </div>
                </div>
<Container className='admin_div' style={{padding:'2rem'}}>
<div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>delete day plan</span>
 </div>
            <Row>
            <Col style={{textAlign:'center'}}>
                            <Dropdown as={'Primary'}>
                            <Button variant="info" style={{width:'200px'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select'}</Button>
                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                            <Dropdown.Menu >
                              {item}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
               <Col>
                  <Button variant="danger" onClick={(event)=>this.handleClick(event)} type='button'>Delete</Button>
               </Col>
            </Row>
            </Container>
</div>
 )

 }
 }


class Day_plan extends React.Component {
  constructor() {
    super();
    this.state={check: false,track_details:[],track_selected:[],fields: ["", "", ""],alert:''}
    this.onClickButtonAdder = this.onClickButtonAdder.bind(this);
    this.onClickButtonSubmit = this.onClickButtonSubmit.bind(this);
//     this.handleClick = this.handleClick.bind(this);
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

onClickButtonAdder(event) {
    event.preventDefault();
    this.setState({
      fields: [...this.state.fields,""]
    });
  }

  onClickFormGroupButton(index) {
    let fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  }

  onChangeFormGroupInput(index, event) {
    let fields = [...this.state.fields];
    fields[index] = event.target.value;
    this.setState({ fields });
  }

  onClickButtonSubmit(event) {
    event.preventDefault();
    const filteredValues = this.state.fields.filter(value => value!="");
    alert(filteredValues+" track selected "+this.state.track_selected.length);

if(this.state.track_selected.length==0)
{
 alert('Please Select A Trek');
}else if(filteredValues.length==0)
{
 
}
else
{

const data={track_info:this.state.track_selected, day_plan:filteredValues}

axios({
                                method: 'post',
                                url: '/submit_day_plan/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    let message=response.data.result
                                    document.getElementById('success_message6').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert6").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert6").fadeTo(500, 1)
                                                                     document.getElementById('success_message6').style.display='none';

                                        });
                                    }, 10000);

                                    this.setState({check: false,track_details:[],track_selected:[],fields: ["", "", ""],alert:message})
				                        })

                                .catch(function (response) {
                                    //handle error
                                    
                                });
}

}

  render() {
  
   const isFormGroupDeletionAllowed =
   this.state.fields.length > 1 ? true : false;
   let item=[]
  for (let x=0;x<this.state.track_details.length;x++)
  {
  let selected=[this.state.track_details[x]]
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={(selected) =>{this.setState({track_selected:[this.state.track_details[x]]})}}>{selected[0]['track_name']}</Dropdown.Item>)
  }
    return (

    <div>
    <div>

            <Container  className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
             <div id='success_message6' className="alert6 alert-success6" style={{display: 'none',borderRadius:'15px'}}>
                  <div className="form_success_msg6" style={{textAlign:'center'}}>
                  <strong>{this.state.alert}</strong>
                  </div>
                </div>
                <div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>add day plan</span>
 </div>
              <Row>
                      <Col style={{paddingTop:'5rem',textAlign:'center'}}>
                            <Dropdown as={'Primary'}>
                            <Button variant="info" style={{width:'200px'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select'}</Button>
                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                            <Dropdown.Menu >
                              {item}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                        <Col>

                        <form className="dynamicForm">
                            <div className="dynamicForm__buttonWrapper">
                              <FormButton
                                click={this.onClickButtonAdder}
                                type="ghost"
                                innerHtml="Add Field"
                              />
                              <FormButton click={this.onClickButtonSubmit} innerHtml="Submit" />
                            </div>

                            {this.state.fields.map((value,index) => (
                              <FormGroup
                                inputChange={this.onChangeFormGroupInput.bind(this, index)}
                                buttonClick={this.onClickFormGroupButton.bind(this, index)}
                                buttonDisabled={index === 0 ? !isFormGroupDeletionAllowed : undefined}
                                value={value}
                                key={index}
                                day={index}
                              />
                            ))}
                          </form>

                        </Col>
              </Row>
            </Container>
            </div>
                <Delete_Day_plan data={this.state.track_details}/>

          </div>
      )
      }
}

function FormButton(props) {
  let buttonType = props.type;
  let buttonModifierClassName = "";

  if (buttonType) {
    buttonType = `${buttonType[0].toUpperCase()}${buttonType.slice(1)}`; // capitalize
    buttonModifierClassName = `dynamicForm__button--is${buttonType}`;
  }

  return (
    <button
      className={`dynamicForm__button ${buttonModifierClassName}`}
      onClick={props.click}
    >
      {props.innerHtml}
    </button>
  );
}

function FormGroup(props) {


let day=props.day+1
  return (
    <div className="dynamicForm__item">
      <input
        className="dynamicForm__itemInput"
        type="text"
        value={props.value}
        onChange={props.inputChange}
        placeholder={'Day '+day}
      />
      <button
        className="dynamicForm__itemButton"
        type="button"
        onClick={props.buttonClick}
        disabled={props.buttonDisabled}
        tabIndex="-1"
      />
    </div>
  );
}

export default Day_plan;