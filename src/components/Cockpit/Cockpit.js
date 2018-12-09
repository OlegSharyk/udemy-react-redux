import React, { Fragment } from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/AuxContainer'

const Cockpit = props => {
    let assignClasses = []
    let btnClass = classes.Button

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ')
    }

    if (props.persons.length <= 2) {
        assignClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold)
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This is realy working!</p>
            <button className={btnClass} onClick={props.clicked}>
                toggle persons
            </button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    )
}

export default Cockpit
