export const SET_LOCATION = 'SET_LOCATION';

const setLocationAction = (location) => ({
  type: SET_LOCATION, 
  payload: location,
})

const setLocation = (location) => {
  return (dispatch)=>{
    dispatch(setLocationAction(location))
 }
}

export default setLocation
