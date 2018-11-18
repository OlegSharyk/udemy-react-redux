import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
// import Radium, { StyleRoot } from 'radium';


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
    // const style={
    //   backgroundColor: 'green',
    //   color: 'white',
    //   border:0,
    //   fontSize:16,
    //   padding:32,
    //   marginBottom:16,
    //   display: 'inline-block',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   }
    // }

    let persons = null;
    let btnClass = '';

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

      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Start React App</h1>
          <p className={assignClasses.join(' ')}>This is realy working!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>toggle persons</button>
          {persons} 
        </div>
    );
    // return React.createElement('div', null, 'h1', 'reat app start')
  }
}

// export default Radium(App);
export default App;
