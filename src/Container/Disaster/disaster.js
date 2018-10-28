import React,{Component} from 'react';
import './disaster.css'
import News from './news/src/App';
import photo from '../../assets/1.jpeg'

class Disaster extends Component {
    render(){
        return(
                <div classname = "disaster">
                <h3>  Stand With Kerala Kerala Flood Relief</h3>
                <img src={photo}></img>
                <p>
                Kerala is in the aftermath of an unprecedented flood havoc. The calamity has caused immeasurable misery and devastation. Hundreds of lives were lost. Thousands of homes were totally destroyed and many more were damaged, we have braved the odds.
Now it is our duty to help the affected rebuild their lives. you can make a difference by joining the rebuilding efforts. Contribute generously to the Chief Minister's Distress Relief Fund.
                </p>
                <a href="https://donation.cmdrf.kerala.gov.in" type="button" className="donate">Donate</a>
                </div>
                
        );
    }
}
export default Disaster;