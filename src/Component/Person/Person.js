import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
    </div>
);

export default person;