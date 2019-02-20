import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'



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



// it('App should render <Header /> components', () => {
//   const wrapper = mount(<Header />)
//   expect(wrapper.find(AppBar)).to.have.lengthOf(1)
// })


