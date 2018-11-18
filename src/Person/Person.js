import React from 'react';
import classes from './Person.css'

// const person = ({name, age}) => {
//     return <h2>Person {name} and {age} years old</h2>
// }

const person = (props) => {
    
    return (
        <div className={classes.Person} >
            <span onClick={props.click}>Delete</span>
            <h2>Person {props.name} and {props.age} years old</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;