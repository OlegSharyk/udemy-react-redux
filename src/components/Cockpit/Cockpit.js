import React, {Fragment} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    let assignClasses = [];
    let btnClass ='';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    

    if (props.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Start React App</h1>
            <p className={assignClasses.join(' ')}>This is realy working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>toggle persons</button>
        </div>
    );
};

export default Cockpit;