import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movieReducer from './movieReducer';
import nowShowingMovies from './nowShowingMovies';
import comingSoonMovies from './comingSoonMovies';
import location from './location';
import locations from './locations';

const rootReducer = combineReducers({
  location,
  locations,
  nowShowingMovies,
  comingSoonMovies,
  routing: routerReducer,
});

export default rootReducer;