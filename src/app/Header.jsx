import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      // eslint-disable-next-line
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  };

  render() {
    const { classes } = this.props
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
                value={this.state.age}
                onChange={this.handleChange('age')}
                input={
                  <OutlinedInput
                    name="age"
                    labelWidth={this.state.labelWidth}
                    id="location-selector"
                  />
                }
              >
                <option value="" />
                <option value={'chennai'}>Chennai</option>
                <option value={'pune'}>Pune</option>
                <option value={'banglore'}>Banglore</option>
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
}

export default withStyles(styles)(Header)
