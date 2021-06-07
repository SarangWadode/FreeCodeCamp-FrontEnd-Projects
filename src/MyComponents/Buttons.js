import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className='buttons'>
                <a id='share-quote' href="https://api.whatsapp.com/send?text=You%20must%20do%20the%20things%20you%20think%20you%20cannot%20do.%20%0A%09-%20Eleanor%20Roosevelt%0A%0ARead%20more%20quotes%20at%20%0Ahttps://fcc-random-quote.glitch.me..."
        data-action="share/whatsapp/share" title='Share on WhatsApp' target='_blank' ><i className="fab fa-whatsapp"></i></a>
                <a id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + this.props.quote + '" - ' + this.props.author)} title='Post quote on Twitter' target='_blank' ><i className="fab fa-twitter"></i></a>
                <button id='new-quote' onClick={this.props.handleClick}>New Quote</button>
            </div>
        )
    }
}
