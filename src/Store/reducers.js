const initialstate= {
	persons: [],
};

const reducers= (state=initialstate,action) => {
if(action.type==='ADD') {
	 const newPerson ={
        id:Math.random(),
        name:action.name,
        age:action.age
    }
        return {
        	...state,
        	persons:state.persons.concat(newPerson) };
}

if(action.type==='REMOVE') {
	const newArr=state.persons.filter(person=> person.id!==action.payload)
            return {
            	...state,
                persons:newArr
            }
}
return state
}
export default reducers;