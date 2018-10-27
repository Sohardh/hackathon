import React, {Component} from 'react';
import Post from '../Posts/posts'


class Home extends Component{
    render(){
        return(
            <div className="home">
            <Post />
            </div>
        )
    }
}
export default Home;