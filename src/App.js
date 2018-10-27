import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/home';
import Posts from './Container/Posts/posts';
import Orders from './Container/Timeline/Timeline'
import Disaster from './Container/Disaster/disaster';
import Top10 from './Container/top10/top10';
import ReactCountdownClock from 'react-countdown-clock'
import Modal from './Component/UI/Modal/Modal'

class App extends Component {
state={
	open:true
}
closeApp = () => {
	this.setState({open:false});

}
  render() {
  	let background=null;
  	if(!this.state.open) {
  		background=(<Modal purchasing={!this.state.open}/>);
  	}
    return (
      <div className="App">
        <h1 className="ace">AceBook</h1>
        {background}
        <Posts/>
        <Top10/>

        <ReactCountdownClock seconds={5}
                     color="#000"
                     alpha={0.9}
                     size={150}
                     onComplete={this.closeApp}
                      />



    
       
        <Orders/>

      </div>
    );
  }
}

export default App;
