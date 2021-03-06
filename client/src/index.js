 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';

import store from './store';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import * as firebase from 'firebase';
import config from './firebaseConfig';

let app = firebase.initializeApp(config);

const Routing = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register"  component={Register}/>
      </div>
    </Router>
  </Provider>

)

ReactDOM.render(
  <Routing/>,
  document.getElementById('root')
);

export default Routing;
