import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/home';
import Posts from './Container/Posts/posts';
import Orders from './Container/Timeline/Timeline'
import Disaster from './Container/Disaster/disaster';
import top10 from './Container/top10/top10'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="ace">AceBook</h1>
        <Posts/>
        <top10/>
        <Disaster/>
        <Orders/>

      </div>
    );
  }
}

export default App;
