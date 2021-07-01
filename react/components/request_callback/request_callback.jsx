import React, { Component } from "react";
import './request_callback.css'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,OverlayTrigger,Tooltip,Modal } from 'react-bootstrap';
import Form_component from '../form_component/form_component'
function MyVerticallyCenteredModal(props) {
let data={other_details:[{track_name:''}] }  ;   //Pass default track name as blank to form component..............
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
	<Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body>
        <Form_component data={data}/>
       </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);
 
  return ( 
    <div>
      <Button id='call_back_fixed_button_id' className='call_back_fixed_button' onClick={() => setModalShow(true)}>
        Book / Query
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;