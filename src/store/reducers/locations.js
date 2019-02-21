import { SET_LOCATIONS } from '../actions/locationAction'

const locations = (state = [], action) => {
    console.log('action', action);

  switch(action.type) {
  case SET_LOCATIONS: 
  console.log('in set locations')
    return action.payload
  default: return state
  }
}

export default locations