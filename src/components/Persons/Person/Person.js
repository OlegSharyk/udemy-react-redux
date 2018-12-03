import React, { Component } from 'react';
import classes from './Person.css';

// const person = ({name, age}) => {
//     return <h2>Person {name} and {age} years old</h2>
// }

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <span onClick={this.props.click}>Delete</span>
        <h2>
          Person {this.props.name} and {this.props.age} years old
        </h2>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
