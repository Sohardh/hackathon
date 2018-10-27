import React,{Component} from 'react';
import './top10.css'
import Git from './appgit/src/Appgit';
class Top10 extends Component {
   
    render(){
        
        return(
            <div className="top"> 
            <h1>Trending Github Repos</h1>
             <Git/></div>
          
        );
    }
}
export default Top10;