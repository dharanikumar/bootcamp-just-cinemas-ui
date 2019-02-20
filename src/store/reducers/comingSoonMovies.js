import { FETCH_COMINGSOON_MOVIES_PROGRESS, FETCH_COMINGSOON_MOVIES_SUCCESS, FETCH_COMINGSOON_MOVIES_FAILURE } from '../actions/comingSoonAction'

const comingSoonMovies = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_COMINGSOON_MOVIES_PROGRESS: return {...state, fetching: true };
    case FETCH_COMINGSOON_MOVIES_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_COMINGSOON_MOVIES_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default comingSoonMovies;