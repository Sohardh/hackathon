import React from 'react';
import classes from './Order.css';

const order = (props) => {

	const ingredients = [];
	
	const ingredientOutput =(
		<span > {props.postData}</span>);
	
	return(
		<div className="order">
		<h4><strong>Username</strong></h4>
		<p> {ingredientOutput}</p>
		<h4><strong style={{float:"left",bottom:"0px",color:'blue'}}>Like</strong></h4>
		
		</div>)

}

export default order;