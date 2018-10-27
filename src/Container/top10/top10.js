import React,{Component} from 'react';
class Top10 extends Component {
    state=[

        {
          "author": "google",
          "name": "gvisor",
          "url": "https://github.com/google/gvisor",
          "description": "Container Runtime Sandbox",
          "language": "Go",
          "stars": 3320,
          "forks": 118,
          "currentPeriodStars": 1624,
          "builtBy": [
            {
              "href": "https://github.com/viatsko",
              "avatar": "https://avatars0.githubusercontent.com/u/376065?s=40&v=4",
              "username": "viatsko"
            }
          ]
        }
    ]
   
   
    render(){
        const trending = require('trending-github');

trending('weekly', 'javascript')
  .then(repos => console.log(repos));
        return(
            <div>hi this is top10</div>

        );
    }
}
export default Top10;