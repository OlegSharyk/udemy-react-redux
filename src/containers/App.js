import React, { Component, PureComponent } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import Radium, { StyleRoot } from 'radium';

import Aux from '../hoc/AuxContainer'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
    constructor(props) {
        super(props)
        console.log('[App.js] inside constructor', props)

        this.state = {
            persons: [
                { id: '123456789', name: 'Oleg', age: 24 },
                { id: '324235565', name: 'John', age: 45 },
                { id: '876743423', name: 'Nastya', age: 20 },
            ],
            showPersons: false,
            toggleClicked: 0,
            authenticated: false,
        }
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillmount()')
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidmount()')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE App.js] inside shouldComponentUpdate")
    //     return (
    //         nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons
    //     )
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] inside componentWillUpdate')
        return nextProps.persons !== this.props.persons
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] inside componentDidUpdate')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[Update App.JS] in getDerivedStateFromProps', nextProps, prevState)

        return prevState
    }

    getSnapshotBeforeUpdate() {
        console.log('[Update App.JS] in getSnapshotBeforeUpdate')
    }

    switchNameHandler = newName => {
        console.log('was clicked')
        // Dont do this !!!! - > this.state.persons[0].name = 'Oleg Vldimirovich'
        this.setState({
            persons: [
                { name: newName, age: 24 },
                { name: 'John', age: 45 },
                { name: 'Nastya', age: 20 },
            ],
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        const person = {
            ...this.state.persons[personIndex],
        }
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({ persons: persons })
    }

    deletePersonHandler = personIndex => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({ persons: persons })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: this.state.toggleClicked + 1,
            }
        })
    }

    loginHandler = () => {
        this.setState({ authenticated: true })
    }

    render() {
        let persons = null

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            )
        }

        return (
            <Aux>
                <button
                    onClick={() => {
                        this.setState({ showPersons: true })
                    }}>
                    Show Persons
                </button>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        )
    }
}

export default withClass(App, classes.App)
