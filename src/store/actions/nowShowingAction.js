import axios from "axios";
import changeCase from "change-case";
import slug from "slug";

export const FETCH_NOWSHOWING_MOVIES_PROGRESS =
  "FETCH_NOWSHOWING_MOVIES_PROGRESS";
export const FETCH_NOWSHOWING_MOVIES_SUCCESS =
  "FETCH_NOWSHOWING_MOVIES_SUCCESS";
export const FETCH_NOWSHOWING_MOVIES_FAILURE =
  "FETCH_NOWSHOWING_MOVIES_FAILURE";

const fetchMoviesInProgress = {
  type: FETCH_NOWSHOWING_MOVIES_PROGRESS
};

const movieDataFetched = data => ({
  type: FETCH_NOWSHOWING_MOVIES_SUCCESS,
  payload: data
});

const movieDataFetchFailure = {
  type: FETCH_NOWSHOWING_MOVIES_FAILURE
};

const fetchNowShowingMovies = (locationId) => {
  return async dispatch => {
    dispatch(fetchMoviesInProgress)
    try {
      const movies =  await axios.get(`http://localhost:9090/v1/movies/1/now-showing/`)
      // const movies = {
      //   data: [
      //     {
      //       id: 1,
      //       name: "Kabali",
      //       experiences: "RDX, Dolby Atmos, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 2,
      //       name: "Sultan",
      //       experiences: "RDX, Dolby Atmos, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 3,
      //       name: "Banjo",
      //       experiences: "RDX 3D",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 4,
      //       name: "Suicide Squad",
      //       experiences: "Dolby Atmos, RDX 3D, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 5,
      //       name: "Namadhu",
      //       experiences: "RDX, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 6,
      //       name: "Pelli Chupulu",
      //       experiences: "RDX, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 7,
      //       name: "Pink",
      //       experiences: "RDX, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 8,
      //       name: "Remo",
      //       experiences: "Dolby Atmos, RDX, SUB",
      //       listingType: "NOW_SHOWING"
      //     },
      //     {
      //       id: 9,
      //       name: "Inferno",
      //       experiences: "Dolby Atmos, RDX, SUB",
      //       listingType: "NOW_SHOWING"
      //     }
      //   ]
      // };

      // const movies = {data: [{
      //   id: 'asfasdfas',
      //   name: 'Kabali',
      //   experience: 'asfasdfag',
      // }]}
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), {
          lower: true
        });
        return { ...movie, slug: sluggedData };
      });
      dispatch(movieDataFetched(moviesData));
    } catch (error) {
      dispatch(movieDataFetchFailure);
    }
  };
};

export default fetchNowShowingMovies;
