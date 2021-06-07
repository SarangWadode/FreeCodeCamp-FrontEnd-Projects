
import React, { Component } from 'react'
import './App.css'
import quotes from './Array'
import Quote from './Quote'
import Buttons from './Buttons'
import Footer from './Footer'

//another way of styling in react
// const wrapperstyle = {
//   width: '100vw',
//   height: '100vh',
//   background:'#999',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    const randQuote = this.randomQuote();
    const quote = randQuote.quote;
    const author = randQuote.author; 
    this.state = {
        quote: quote,
        author: author,
    }
    this.handelClick = this.handelClick.bind(this)
  }

  randomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)]
  }
  handelClick() {
      const obj = quotes[Math.floor(Math.random() * quotes.length)]
      const quote = obj.quote;
      const author = obj.author;
      this.setState({
          quote: quote,
          author: author
      })
  }

  render() {
    return (
      <div className="wrapper" >
        <div id='quote-box'>
          <Quote quote={this.state.quote} author={this.state.author} />
          <Buttons quote={this.state.quote} author={this.state.author} handleClick={this.handelClick} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    )
  }
}




