// import React from 'react'
// import PropTypes from 'prop-types'


// function MovieDetails() {
//   return (
//   )
// }

// MovieDetails.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default MovieDetails
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'


const synopsis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi. Id diam vel quam elementum pulvinar etiam non quam lacus. Nisl condimentum id venenatis a condimentum vitae sapien. Neque aliquam vestibulum morbi blandit cursus.'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: '100%',
    height: '100%',
    padding: theme.spacing.unit *3
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary ,
  },
})

function CenteredGrid(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <img width={1500} src='https://img.spicinemas.in/resources/images/home/image-2.jpg'/>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.paper}>
            <Typography gutterBottom align='left' style={{fontSize: '20px', fontWeight: 'bold'}} variant="heading">
                  Synopsis
            </Typography>
            <Typography align='left' style={{fontSize: '15px'}}>
              <p>{synopsis}</p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography gutterBottom align='left' style={{fontSize: '20px', fontWeight: 'bold'}} variant="heading">
                  Trailers and Clips
            </Typography>
            <img src='http://i1.ytimg.com/vi/JfbxcD6biOk/default.jpg'/>
            <img src='http://i2.ytimg.com/vi/JfbxcD6biOk/default.jpg'/>
            <img src='http://i3.ytimg.com/vi/JfbxcD6biOk/default.jpg'/>

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JfbxcD6biOk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" className={classes.button}>
            <Typography variant='h6' style={{color: 'white', fontWeight: 'bold', fontSize:'16px'}}>
              BOOK A TICKET
            </Typography>
          </Button>
        </Grid>
      
      </Grid>
    </div>
  )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CenteredGrid)
