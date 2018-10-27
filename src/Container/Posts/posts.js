import React, {Component} from 'react';
import Post from '../../Component/post/post';


class Posts extends Component{
state = [
    {username: "sohardh", post: "HIsdfsdfsdfssddsf"},
    {username: "Sukaran", post: "HIssdfsdfsddfsdfsdfssddsf"},
    {username: "Snigdha", post: "sdfsdfsdjkfldsf"}
]



    render(){
        return(
            <div>
                 <Post />
            </div>
           
        );
    }
}
export default Posts;