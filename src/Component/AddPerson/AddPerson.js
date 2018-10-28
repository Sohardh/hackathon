import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component{

	state= {
		name:'',
		age:null
	}
	nameChangeHandler = (event) => {
			
		this.setState({name:event.target.value});
		}

	ageHandler = (event) => {
		this.setState({age:event.target.value});
	}
	render () {
		

		return(<div className="AddPerson">
    <input onChange={this.nameChangeHandler} type='text' value={this.state.name} placeholder='task'/>
   <br/>        <button onClick={() => this.props.personAdded(this.state.name,this.state.age)}>Add Task</button>
    </div>);

	}
}

export default AddPerson;