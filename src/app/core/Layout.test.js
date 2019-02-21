import React from 'react'
import { configure, mount } from 'enzyme'
import  Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Layout from './Layout'
import { Grid } from '@material-ui/core'

configure({adapter: new Adapter()})

describe('Layout Tests', function(){

  it('Layout should render with 3 Grid', () => {
    const wrapper = mount(<Layout col={6} />)
    expect(wrapper.find(Grid)).to.have.lengthOf(3)  
  })

  it('Layout should render Grid as many times as children', () => {
    const wrapper = mount(<Layout col={6}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Layout>)
    expect(wrapper.find(Grid)).to.have.lengthOf(7)  
  })

})