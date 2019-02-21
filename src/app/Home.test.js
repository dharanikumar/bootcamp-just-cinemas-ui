import React from 'react'
import {MemoryRouter} from 'react-router'
import {mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from './Home'
import MovieGrid from '../movies/MovieGrid'
import { expect } from 'chai'
const mockStore = configureMockStore([ thunk ])

configure({ adapter: new Adapter() })
const storeStateMock = {
  nowShowingMovies:{
    fetching:false,
    items:[{ 'id': 1, 'name': 'Kabali', 'synopsis': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor est, feugiat sit amet sagittis nec, viverra vehicula orci. Sed pulvinar imperdiet nunc vel fringilla. In ac facilisis orci. Ut suscipit nisl scelerisque elit finibus, sed auctor velit placerat. Mauris et lacus in felis finibus dictum vel non mauris. Integer feugiat augue vitae mauris ultricies sodales. Nam semper tincidunt viverra. Aliquam pellentesque dolor nec tortor semper, sed rhoncus magna tincidunt.', 'rating': 5, 'experiences': 'RDX, Dolby Atmos, SUB', 'bannerUrl': 'https://img.spicinemas.in/resources/images/movies/Kabali/1000x320.jpg', 'listingType': 'now showing' }]
  },
  comingSoonMovies: {
    fetching:false,
    items: [{ 'id': 1, 'name': 'Kabali', 'synopsis': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor est, feugiat sit amet sagittis nec, viverra vehicula orci. Sed pulvinar imperdiet nunc vel fringilla. In ac facilisis orci. Ut suscipit nisl scelerisque elit finibus, sed auctor velit placerat. Mauris et lacus in felis finibus dictum vel non mauris. Integer feugiat augue vitae mauris ultricies sodales. Nam semper tincidunt viverra. Aliquam pellentesque dolor nec tortor semper, sed rhoncus magna tincidunt.', 'rating': 5, 'experiences': 'RDX, Dolby Atmos, SUB', 'bannerUrl': 'https://img.spicinemas.in/resources/images/movies/Kabali/1000x320.jpg', 'listingType': 'now showing' }]
    ,
  },

}

let store
let component
describe('tests for Home', () => {
 

  it('renders MovieGrid', () => {
    store = mockStore(storeStateMock)
    component = mount(<MemoryRouter initialEntries={['/']}>
      <Home store={ store }/>
    </MemoryRouter>)
    expect(component.find(MovieGrid)).to.have.lengthOf(1)
  })
})