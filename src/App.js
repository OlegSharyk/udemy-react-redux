import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '123456789', name: 'Oleg', age: 24},
      {id: '324235565', name: 'John', age: 45},
      {id: '876743423', name: 'Nastya', age: 20},
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    console.log('was clicked');
    // Dont do this !!!! - > this.state.persons[0].name = 'Oleg Vldimirovich'
    this.setState({persons: [
      {name: newName, age: 24},
      {name: 'John', age: 45},
      {name: 'Nastya', age: 20},
    ]})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style={
      backgroundColor: 'green',
      border:0,
      fontSize:16,
      padding:32,
      marginBottom:16,
      display: 'inline-block',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}            
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              >My hobbies football</Person>)  
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Start React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, 'h1', 'reat app start')
  }
}

export default App;
