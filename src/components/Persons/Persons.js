import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('Persons.js in constructor');
  }

  componentWillMount() {
    console.log('Persons.js in componentWillMount');
  }

  componentDidMount() {
    console.log('Persons.js in componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] in componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate');

    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] inside componentWillUpdate',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('Persons.js in componentDidUpdate');
  }

  render() {
    console.log('Persons.js in render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        >
          My hobbies football
        </Person>
      );
    });
  }
}

export default Persons;
