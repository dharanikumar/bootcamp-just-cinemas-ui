import React from 'react'
import Header from './Header'
import { configure, mount} from 'enzyme'
import  Adapter from 'enzyme-adapter-react-16'
import { AppBar } from '@material-ui/core'
import { expect } from 'chai'

configure({adapter: new Adapter()})

describe('Header Tests', function(){

  it('Header should render appbar component', () => {
    const wrapper = mount(<Header />)
    expect(wrapper.find(AppBar)).to.have.lengthOf(1)  
  })

})