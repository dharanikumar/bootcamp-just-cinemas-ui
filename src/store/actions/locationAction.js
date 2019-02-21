import axios from "axios";

export const SET_LOCATION = 'SET_LOCATION'
export const SET_LOCATIONS = 'SET_LOCATIONS'

const setLocationAction = (location) => ({
  type: SET_LOCATION, 
  payload: location,
})

const setLocationsAction = (locations) => ({
  type: SET_LOCATIONS, 
  payload: locations,
})

const locationDataFetchFailure = {type:'FETCH_LOCATIONDATA_FAILURE'}

export const getLocations = () => {
  return async dispatch => {
    try {
      
      let locations = await axios.get('http://localhost:9090/locations')
      dispatch(setLocationsAction(locations.data))
    }
    catch(error) {
      dispatch(locationDataFetchFailure)
    }
  }
}

export const setLocation = (location) => {
  return (dispatch)=>{
    dispatch(setLocationAction(location))
  }
}

export default setLocation
