import React, { Component, Fragment } from 'react';
import {Route, Link} from 'react-router-dom'; 

import './App.css';
import HomeNav from './components/HomeNav';

class App extends Component {
  render() {
    return (
      
      <Fragment>
          <Route path='/' component={HomeNav} />
      </Fragment>
    );
  }
}
// Apple Logo  Mac iPad iPhone Watch TV Music Support *search thingy*  notepade 
export default App;