
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
    const color = colors[Math.floor(Math.random() * colors.length)]
    this.state = {
        quote: quote,
        author: author,
        color: color
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
      const color = colors[Math.floor(Math.random() * colors.length)]
      this.setState({
          quote: quote,
          author: author,
          color: color
      })
  }

  render() {
    return (
      <div className="wrapper" style={{color: `${this.state.color}`,background:`${this.state.color}`}}>
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

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];


