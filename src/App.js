import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import logo from './logo.svg';
import Indicator from './Indicator.js';
import AppContainer from './containers/app';
import Statistics from './Statistics';
import Book from './Book.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="Home">
      <Indicator />
      <Book />
  </div>
);

const Words = () => (
  <div className="Words">
    <Statistics />
  </div>
);

const Test = () => (
  <p>Kikoo</p>
);

const App = () => (
  <Provider>
    <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Lecture</Link>
            </li>
            <li>
              <Link to="/words">Mes concepts</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
          <hr/>
          
            <Route exact path="/" component={Home} />
            <Route path="/words" component={Words} />
            <Route path="/test" component={Test} />
        </div>
    </Router>
  </Provider>
);

export default App;
