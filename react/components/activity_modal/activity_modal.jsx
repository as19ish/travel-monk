import React, { Component ,Suspense} from "react";
import './activity_modal.css'
import {Button} from 'react-bootstrap';
const MyVerticallyCenteredModal = React.lazy(() => import('../activity_call/activity_call'));

function App() {
  const [modalShow, setModalShow] = React.useState(false);
    

  return (
    <div>
      <Button id='call_back_fixed_button1' className='call_back_fixed_button1 neu-btn' onClick={() => setModalShow(true)}>
        <i className="fa fa-info-circle _15px"aria-hidden="true"></i>&nbsp;<span className='_15px'>Info</span>
      </Button>

<Suspense fallback={<div></div>}>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
	 </Suspense>
    </div>
  );
}

export default App;