import {SET_LOCATION} from '../actions/locationAction'
import location from './location'
describe('location reducer', () => {
  it('should return the location object', () => {
    expect(location({}, {type:SET_LOCATION, payload: {id:1, name: 'chennai'} })).toEqual(
      {id:1, name: 'chennai'}
    )
  })

})