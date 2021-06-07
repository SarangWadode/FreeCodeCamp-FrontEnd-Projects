import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className='buttons'>
                <button><i className="fab fa-whatsapp"></i></button>
                <button><i className="fab fa-twitter"></i></button>
                <button onClick={this.props.handleClick}>Next</button>
            </div>
        )
    }
}
