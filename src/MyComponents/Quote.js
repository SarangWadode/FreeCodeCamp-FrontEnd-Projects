import React, { Component } from 'react'

export default class Quote extends Component {
    
    render() {
        return (
            <div id='quote'>
                <div id='text'>{this.props.quote}</div>
                <div id='author'>- {this.props.author}</div>
            </div>
        )
    }
}
