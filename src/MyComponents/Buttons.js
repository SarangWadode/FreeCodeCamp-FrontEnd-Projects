import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className='buttons'>
                <a id='share-quote' href={"https://api.whatsapp.com/send?text=" +
      encodeURIComponent('"' + this.props.quote  + '" \n - ' + this.props.author + '\n' +"read more quotes at " + "https://sarangwadode.github.io/random-quote/")}
        data-action="share/whatsapp/share" title='Share on WhatsApp' target='_blank' ><i className="fab fa-whatsapp"></i></a>
                <a id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + this.props.quote + '" - ' + this.props.author)} title='Post quote on Twitter' target='_blank' ><i className="fab fa-twitter"></i></a>
                <button id='new-quote' onClick={this.props.handleClick}>New Quote</button>
            </div>
        )
    }
}
