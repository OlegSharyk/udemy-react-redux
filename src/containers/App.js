import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);

    this.state = {
      persons: [
        { id: '123456789', name: 'Oleg', age: 24 },
        { id: '324235565', name: 'John', age: 45 },
        { id: '876743423', name: 'Nastya', age: 20 }
      ],
      showPersons: false
    };
  }

  switchNameHandler = newName => {
    console.log('was clicked');
    // Dont do this !!!! - > this.state.persons[0].name = 'Oleg Vldimirovich'
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'John', age: 45 },
        { name: 'Nastya', age: 20 }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
