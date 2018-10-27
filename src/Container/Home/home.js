import React, {Component} from 'react';
import Post from '../Posts/posts'
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className="home">
            <h1>AceBook</h1>
            <Post className="posts" />
            </div>
        )
    }
}
export default Home;