import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { getLocations, setLocation } from '../store/actions/locationAction'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 180,
  },
})
class Header extends React.Component {
  state = {
    location: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.props.fetchLocations()
    this.setState({
      // eslint-disable-next-line
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    })
  }

  handleChange = event => {
    let locations = this.props.locations
    let location = locations.filter((location)=> location.id == event.target.value)[0]
    this.props.setLocation(location)
  };

  render() {
    let { classes, locations, location } = this.props
    
    if(!Array.isArray(locations)) locations =[]
    return (
      <div className={classes.root}>
        <AppBar position="static" color='inherit'>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <img  src='logo.png'/>
            
            </IconButton>
            <Typography variant='h4' style={{ fontWeight: 'bold', fontFamily: 'Helvetica Neue'}} align='left' className={classes.grow}>
           JUST CINEMAS
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref
                }}
                htmlFor="location-selector"
              >
            Select Location
              </InputLabel>
              <Select
                native
                value={location.id}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    name="location"
                    labelWidth={this.state.labelWidth}
                    id="location-selector"
                  />
                }
              >
                <option value="" />
                {locations.map((location)=><option key={location.id} value={location.id} >{location.name}</option>)}
                
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchLocations: PropTypes.func,
  setLocation: PropTypes.func,
  location: PropTypes.object,
  locations: PropTypes.array
}

var HeaderCmp =  withStyles(styles)(Header)
export default connect(
  (state) =>({
    locations: state.locations,
    location: state.location
  }),
  (dispatch) => ({
    fetchLocations: () => dispatch(getLocations()),
    setLocation: (location) => dispatch(setLocation(location))
  })
)(HeaderCmp)
