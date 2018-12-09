import React, { Component } from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

import { AuthContext } from '../../../containers/App'

// const person = ({name, age}) => {
//     return <h2>Person {name} and {age} years old</h2>
// }

class Person extends Component {
    constructor(props) {
        super(props)

        console.log('[Person.js] in constructor')

        this.inputElement = React.createRef()
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus()
        }
    }

    focus() {
        this.inputElement.current.focus()
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => (auth ? <p>I am authenticated</p> : null)}
                </AuthContext.Consumer>
                <span onClick={this.props.click}>Delete</span>
                <h2>
                    Person {this.props.name} and {this.props.age} years old
                </h2>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClass(Person, classes.Person)
