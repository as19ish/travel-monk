// import React from "react";
// import { Route} from 'react-router-dom';
// class Activity extends Component {
	

//     render() {
//    return (
//     <React.Fragment>
//     <div className="area"></div><nav className="main-menu arrow-right">
//     <ul>
//         <li>
//         <Link to="/save_himalaya"><a href="">
//                 <i className="fa-style fa-home fa-2x"></i>
//                 <span className="nav-text">
//                     Social
//                 </span>
//             </a> 
//             </Link>
          
//         </li>
//         <li className="has-subnav">
//         <Link to="/videos"> <a href="">
//                 <i className="fa-style fa-laptop fa-2x"></i>
//                 <span className="nav-text">
//                     Videos
//                 </span>
//             </a>
//             </Link>
            
//         </li>
//         <li className="has-subnav">
//         <Link to="/photos"><a href="#">
//                <i className="fa-style fa-list fa-2x"></i>
//                 <span className="nav-text">
//                     Images
//                 </span>
//             </a>
//             </Link>
//         </li>
//         <li className="has-subnav">
//         <Link to="/tea_house"><a href="#">
//                <i className="fa-style fa-folder-open fa-2x"></i>
//                 <span className="nav-text">
//                     Tea-House
//                 </span>
//             </a>
//            </Link>
//         </li>
//             </ul>
// </nav>
// </React.Fragment>
//         );
//   }
// }

// export default Activity;



import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import './activity-2.css';
import { Link} from 'react-router-dom';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
const Activity_modal = React.lazy(() => import('../activity_modal/activity_modal'));
// import { AssistiveTouch } from "react-assistivetouch-menu";
// import Draggable from 'react-draggable';

// function getMenuItems() {
//   return [{
//       icon: <Link to="/save_himalaya"><div className="menuitem">★</div></Link>,
//       label: "Social"
//     },{
//       icon: <Link to="/videos"><div className="menuitem">🖐</div></Link>,
//       label: "Videos"
//     },{
//       icon: <Link to="/photos"><div className="menuitem">⊕</div></Link>,
//       label: "Photos"
//     },{
//       icon: <div className="menuitem">😴</div>,
//       label: "Snooze"
//     },{
//       icon: <Link to="/tea_house"><div className="menuitem">🍟</div></Link>,
//       label: "T-house"
//     },{
//       icon: <div className="menuitem">🙋</div>,
//       label: "Hey"
//     }];
// }

function Loading() {
  return <div className="container_loading">
  <div className="bar1 bar"></div>
  <div className="bar2 bar"></div>
  <div className="bar3 bar"></div>
  <div className="bar4 bar"></div>
  <div className="bar5 bar"></div>
  <div className="bar6 bar"></div>
  <div className="bar7 bar"></div>
  <div className="bar8 bar"></div>
  <div className="bar9 bar"></div>
  <div className="bar10 bar"></div>

  <div className="progressContainer">
    <div className="progress"></div>
  </div>
</div>

}

class Example extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
              showModal: false,
              items:[
                      ['/save_himalaya',"Social"],
                      ['/videos',"Videos"],
                      ['/photos',"Photos"],
                      ['/tea_house',"T-house"],
                    ]
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    let items = this.state.items.map((element)=>{
      return <Link to={element[0]}>
        <div className="menuitem" ><Button variant="outline-success" onClick={()=>{this.close()}}>{element[1]}</Button></div>
        <br/>
        </Link>
    })
    
    return (
      <div>

        <Button
          id='info-button'
          className="mob-upcoming-nav-btn btn btn-yellow float-right new_style"
          onClick={()=>{this.open()}}
        >
          Info
        </Button>

        <Modal show={this.state.showModal} onHide={()=>{this.close()}} centered>
          <Modal.Header closeButton>
            <Modal.Title>INFO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
              <Col>{items}</Col>
              <Col>
              <Suspense fallback={<div style={{paddingTop:'10%',paddingBottom:'10%'}}><Loading/></div>}>
                <Activity_modal/>
              </Suspense>
              </Col>
            </Row>
          </Container>         
            

            <hr />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{this.close()}}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Example;