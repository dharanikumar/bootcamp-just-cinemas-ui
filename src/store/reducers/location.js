import { SET_LOCATION } from '../actions/locationAction'

const location = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case SET_LOCATION: return {...state, location: action.payload };
    default: return state
  }
}

export default location;