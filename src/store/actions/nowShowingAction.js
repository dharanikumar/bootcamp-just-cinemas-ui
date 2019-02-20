import axios from 'axios'
import changeCase from 'change-case'
import slug from 'slug'

export const FETCH_NOWSHOWING_MOVIES_PROGRESS = 'FETCH_NOWSHOWING_MOVIES_PROGRESS'
export const FETCH_NOWSHOWING_MOVIES_SUCCESS = 'FETCH_NOWSHOWING_MOVIES_SUCCESS'
export const FETCH_NOWSHOWING_MOVIES_FAILURE = 'FETCH_NOWSHOWING_MOVIES_FAILURE'

const fetchMoviesInProgress = {
  type: FETCH_NOWSHOWING_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_NOWSHOWING_MOVIES_SUCCESS, 
  payload: data,
})

const movieDataFetchFailure = {
  type: FETCH_NOWSHOWING_MOVIES_FAILURE,
}

const fetchNowShowingMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress)
    try {
      const movies = await axios.get('http://localhost:9090/movies/now-showing')
      // const movies = {data: [{
      //   id: 'asfasdfas',
      //   name: 'Kabali',
      //   experience: 'asfasdfag',
      // }]}
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true })
        return {...movie, slug: sluggedData}
      })  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      dispatch(movieDataFetchFailure)
    }
  }
}

export default fetchNowShowingMovies
