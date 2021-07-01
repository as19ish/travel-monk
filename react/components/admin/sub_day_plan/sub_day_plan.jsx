import React, { Component } from "react";
import './sub_day_plan.css'
import axios from 'axios'
import {Container,Row,Col,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import $ from 'jquery'
class Sub_day_plan extends React.Component {
  constructor() {
    super();
    this.state={check: false,track_details:[],track_selected:[],fields: ["", "", ""],track_days:[],track_day_selected:[],alert:''}
    this.onClickButtonAdder = this.onClickButtonAdder.bind(this);
    this.onClickButtonSubmit = this.onClickButtonSubmit.bind(this);
    this.select_track = this.select_track.bind(this);
//     this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount()
  {
    
        axios.get('http://localhost:8000/get_track_id_name/')
              .then(res => {
                
                this.setState({track_details:res.data.result})
              })
  }
  componentDidUpdate()
 {
   
     axios.get('http://localhost:8000/get_track_id_name/')
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
 

   axios.get('http://localhost:8000/get_days_using_track_id/',{params:{track_id:x[0]['id']}})
              .then(res => {
                
                this.setState({track_days:res.data.result,track_selected:x})
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

if(this.state.track_selected.length==0)
{
 alert('Please Select A Trek');
}else if(this.state.track_day_selected.length==0)
{
  alert('Please Select A Day');
}else
 if(filteredValues.length==0)
{
 
}
else
{

const data={track_day_selected:this.state.track_day_selected, sub_day_plan:filteredValues}

axios({
                                method: 'post',
                                url: 'http://localhost:8000/submit_sub_day_plan/',
                                data:data
                                })
                                .then(response=> {
                                    //handle success

                                    
                                    let message=response.data.result
                                    document.getElementById('success_message7').style.display='block';
                                    window.setTimeout(function() {
                                        $(".alert7").fadeTo(500, 0).slideUp(500, function(){

                                                                     $(".alert7").fadeTo(500, 1)
                                                                     document.getElementById('success_message7').style.display='none';

                                        });
                                    }, 10000);

                                    this.setState({check: false,track_details:[],track_selected:[],fields: ["", "", ""],track_days:[],track_day_selected:[],alert:message})
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
  
  item.push(<Dropdown.Item eventKey={selected['id']} onSelect={() =>{this.select_track(selected)}}>{selected[0]['track_name']}</Dropdown.Item>)
  }

   let day_item=[]
  for (let x=0;x<this.state.track_days.length;x++)
  {
  let selected=[this.state.track_days[x]]
  
  day_item.push(<Dropdown.Item title={this.state.track_days[x][1]} eventKey={this.state.track_days[x][0]} onSelect={() =>{this.setState({track_day_selected:selected})}}>{x+1}</Dropdown.Item>)
  }

    return (

    <div>
            <Container className='admin_div' style={{padding:'2rem',minHeight:'200px'}}>
             <div id='success_message7' className="alert7 alert-success7" style={{display: 'none',borderRadius:'15px'}}>
                  <div className="form_success_msg7" style={{textAlign:'center'}}>
                  <strong>{this.state.alert}</strong>
                  </div>
                </div>
                <div style={{textAlign:'center'}}>
<span className='yellow-tag-title' style={{textTransform:'uppercase',marginBottom:'3rem'}}>add Sub Day plan</span>
 </div>
              <Row>
                      <Col style={{paddingTop:'5rem',textAlign:'center'}}>
                              <Row>
                                 <Col style={{textAlign:'center',margin:'5px'}}>
                                   <Dropdown as={'Primary'}>
                                        <Button variant="info" style={{width:'200px'}}>{this.state.track_selected.length!=0?this.state.track_selected[0]['track_name']:'Select Track'}</Button>
                                        <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                        <Dropdown.Menu >
                                          {item}
                                        </Dropdown.Menu>
                                      </Dropdown>
                                 </Col>
                                 <Col style={{textAlign:'center',margin:'5px'}}>
                                         <Dropdown as={'Primary'}>
                                            <Button variant="info" style={{width:'200px'}}>{this.state.track_day_selected.length!=0?this.state.track_day_selected[0][1]:'Select Day'}</Button>
                                            <Dropdown.Toggle split variant="success" id="dropdown-custom-2"/>
                                            <Dropdown.Menu >
                                              {day_item}
                                            </Dropdown.Menu>
                                      </Dropdown>
                                 </Col>
                              </Row>

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
        placeholder={'Activity '+day}
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

export default Sub_day_plan;