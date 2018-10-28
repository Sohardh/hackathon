import React, { Component } from 'react';
import Person from '../../Component/Person/Person';
import AddPerson from '../../Component/AddPerson/AddPerson';
import reducers from '../../Store/reducers';
import { connect } from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.per.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePersonHandler(person.id)}
                      />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
    per:state.persons
};
};
const mapDispatchToProps = dispatch => {
   return{ personAddedHandler: (name,age) => dispatch({type:'ADD',name:name,age:age}),
    deletePersonHandler: (id) => dispatch({type:'REMOVE',payload:id})
};
};
export default connect(mapStateToProps,mapDispatchToProps)(Persons);