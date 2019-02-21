import React from 'react'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Header from './Header'
import { AppBar } from '@material-ui/core'
import { expect } from 'chai'
const mockStore = configureMockStore([ thunk ])

configure({ adapter: new Adapter() })
const storeStateMock = {
  location:{id:1, name: 'chennai'},
  locations:[
    {id: 1,
      name: 'chennai'},
    {id: 2,
      name: 'pune'}
  ]
}

let store
let component
describe('tests for Header', () => {
 

  it('renders Appbar', () => {
    store = mockStore(storeStateMock)
    component = mount(<Header store={store} />)
    expect(component.find(AppBar)).to.have.lengthOf(1)
  })
})