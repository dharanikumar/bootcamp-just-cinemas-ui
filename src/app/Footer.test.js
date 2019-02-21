import React from 'react'
import Footer from './Footer'
import { configure, mount } from 'enzyme'
import  Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Link from '@material-ui/core/Link'

configure({adapter: new Adapter()})

describe('Footer Tests', function(){

  it('Footer should render appbar component', () => {
    const wrapper = mount(<Footer />)
    expect(wrapper.find(Link)).to.have.lengthOf(1)  
  })

})