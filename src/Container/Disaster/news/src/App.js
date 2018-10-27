import React, {Component} from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import logo from './images/react.svg';
import news from './images/news.png';

class Appnews extends Component {
  render() {
    return (
      <div className="app">
        
        

         
      
        <Search default="bbc-news"/>
        <Footer/>
      </div>
    );
  }
}

export default Appnews;
