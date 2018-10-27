import React from 'react';
import classes from './Order.css';

const order = (props) => {

	const ingredients = [];
	
	const ingredientOutput =(
		<span > {props.postData}</span>);
	
	return(
		<div className="order">
		<p> {ingredientOutput}</p>
		
		</div>)

}

export default order;