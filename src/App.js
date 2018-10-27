import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/home';
import Posts from './Container/Posts/posts';
import Disaster from './Container/Disaster/disaster';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="ace">AceBook</h1>
        <Posts/>
        <Disaster />
      </div>
    );
  }
}

export default App;
