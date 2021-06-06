
import React, { Component } from 'react'
import './App.css'
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
  render() {
    return (
      <div className="wrapper" >
        <div id='quote-box'>
          <Quote />
          <Buttons />
          <Footer />
        </div>
      </div>
    )
  }
}

