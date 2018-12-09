import React, { Component } from 'react'

// const withClass = (WrappedComponents, className) => {
//     return props => (
//         <div className={className}>
//             <WrappedComponents {...props} />
//         </div>
//     )
// }

const withClass = (WrappedComponents, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponents ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    })
}

export default withClass
