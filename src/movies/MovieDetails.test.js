import React from 'react'
import {MemoryRouter} from 'react-router'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import MovieDetails from './MovieDetails'

configure({ adapter: new Adapter() })

let component
describe('tests for Home', () => {

  it('renders MovieDetails before api call', () => {
    component = mount(<MemoryRouter initialEntries={['/movies/1']}>
      <MovieDetails match={{params:{id:1}}} />
    </MemoryRouter>)
    expect(component.find('div').text()).to.equal('Loading...')
  })
})