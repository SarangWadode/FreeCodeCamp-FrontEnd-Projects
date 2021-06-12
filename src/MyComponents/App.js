
import React, { Component } from 'react'
import './App.css'
import quotes from './Array'
import Quote from './Quote'
import Buttons from './Buttons'
import Footer from './Footer'


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
      const text = document.getElementById('quote')
      text.classList.add('exp')
      setTimeout(() => text.classList.remove('exp'),1500)
      const box = document.getElementById('quote-box')
      box.classList.add('kuch')
      setTimeout(() => box.classList.remove('kuch'),1000)
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
  '#53af9d',
  '#f8bc5a',
  '#f15f4e',
  '#be79da',
  '#FB6964',
  '#94cac3',
  '#4de0eb',
  '#fa9af5',
  '#c078fc',
  'rgb(139 172 205)',
  'rgb(114 92 94)',
  'rgb(98 103 108)',
];


