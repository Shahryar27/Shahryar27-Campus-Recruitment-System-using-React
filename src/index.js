import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase'
import Routers from './Routes/route'
import { Provider } from 'react-redux'
import store from './Store/store/store'

// Initialize Firebase
var config = {

};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <Routers />
   </Provider>
  ,
  document.getElementById('root'));
