import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className='buttons'>
                <button onClick={this.props.handleClick}>Next</button>
            </div>
        )
    }
}
