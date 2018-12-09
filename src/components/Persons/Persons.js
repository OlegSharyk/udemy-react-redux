import React, { Component, PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props)
        console.log('Persons.js in constructor')

        this.lastPersonRef = React.createRef()
    }

    componentWillMount() {
        console.log('Persons.js in componentWillMount')
    }

    componentDidMount() {
        console.log('Persons.js in componentDidMount')
        this.lastPersonRef.current.focus()
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] in componentWillReceiveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE Persons.js] inside shouldComponentUpdate")
    //     return (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     )
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('Persons.js in componentDidUpdate')
    }

    render() {
        console.log('Persons.js in render')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    position={index}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    ref={this.lastPersonRef}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}>
                    My hobbies football
                </Person>
            )
        })
    }
}

export default Persons
