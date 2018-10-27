import React,{Component} from 'react';
import classes from './Input.css';

const input = (props) => {
	let inputElement=null;
	
	
		switch(props.elementType) {
			
			case('textarea'): inputElement= <textarea onChange={props.changed} className="textarea" {...props.elementConfig} value={props.value} />;
			break;
			
			default:
			inputElement= <input className="input"{...props.elementConfig} value={props.value}/>;
		}
	return(
		<div >
		<label>{props.label}</label>
		{inputElement}
		</div>
		
		)

}

export default input;