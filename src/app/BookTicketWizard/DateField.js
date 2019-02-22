import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import dateFormat from 'date-format'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    border:1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  label: {
    letterSpacing : 1,
    marginRight: 10,
  },
  resize:{
    fontSize:18,
    marginTop: -4
  }
})

function DatePickers(props) {
  const { classes } = props

  let date = new Date()
  let now = dateFormat(date,'yyyy-dd-mm')
  return (
    <form className={classes.container} noValidate>
      <Typography className={classes.label} variant={'h4'}>Select Date  </Typography>
      <TextField
        id="date"
        // label="Select Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputProps={{
          classes: {input: classes.resize}
        }}
        InputLabelProps={{
          shrink: true,
          style:{fontSize: 28,fontWeight:'normal',color:'black'}
        }}
      />
    </form>
  )
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DatePickers)