import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AppContainer } from 'react-hot-loader';
import Main from './components/MainComponent/MainComponent';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
 <Router><Main/></Router>, 
 document.getElementById('react')
);
if (module.hot) {
  module.hot.accept('./components/MainComponent/MainComponent', () => { render(Main) })
}