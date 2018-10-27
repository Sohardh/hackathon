import React,{Component} from 'react';
import classes from './Input.css';

const input = (props) => {
	let inputElement=null;
	const inputClasses=[classes.inputElement];
	if(props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.invalid);
	}
		switch(props.elementType) {
			case('input'): inputElement= <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
			break;
			case('textarea'): inputElement= <textarea onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
			break;
			case('select'): inputElement= (
				<select onChange={props.changed} className={inputClasses.join(' ')} value={props.value}>
				{ props.elementConfig.options.map(op => (
					<option key={op.value} value={op.value}>
					{op.displayValue}
					</option>
					))
			}	
			</select>);
			break;
			default:
			inputElement= <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
		}
	return(
		<div className={classes.Input}>
		<label className={classes.Label}>{props.label}</label>
		{inputElement}
		</div>
		
		)

}

export default input;