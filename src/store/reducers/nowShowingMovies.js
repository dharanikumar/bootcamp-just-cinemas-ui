import { FETCH_NOWSHOWING_MOVIES_PROGRESS, FETCH_NOWSHOWING_MOVIES_SUCCESS, FETCH_NOWSHOWING_MOVIES_FAILURE } from '../actions/nowShowingAction'

const nowShowingMovies = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
  case FETCH_NOWSHOWING_MOVIES_PROGRESS: return {...state, fetching: true }
  case FETCH_NOWSHOWING_MOVIES_SUCCESS: return {...state, fetching: false, items: action.payload }
  case FETCH_NOWSHOWING_MOVIES_FAILURE: return {...state, fetching: false, error: true }
  default: return {...state}
  }
}

export default nowShowingMovies