import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component{ 
	shouldComponentUpdate(nextProps, nextState) {
		return   nextProps.purchasing !==this.props.purchasing;
	}
	
	componentWillUpdate (){
		console.log('[Modal]will update');
	}
	render() {
	return(<div>

	<div 
	className="Modal"
	style={{
		display: this.props.purchasing ? 'block' : 'none' 
	}}>
	{this.props.children}
	</div>
	</div>);
}
}

export default Modal;