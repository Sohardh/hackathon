import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/home';
import Posts from './Container/Posts/posts';
import Orders from './Container/Timeline/Timeline';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Posts/>
        <Orders/>
      </div>
    );
  }
}

export default App;
