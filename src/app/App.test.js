/*global it*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'
import Footer from './Footer'

it('renders App without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})


it('renders Header without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Footer without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
