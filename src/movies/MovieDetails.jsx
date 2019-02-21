import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'
import Layout from '../app/core/Layout'
import YoutubeDialogue from '../app/core/YoutubeDialogue'
// import axios from 'axios'

const synopsis =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi. Id diam vel quam elementum pulvinar etiam non quam lacus. Nisl condimentum id venenatis a condimentum vitae sapien. Neque aliquam vestibulum morbi blandit cursus.'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    width: '100%',
    height: '100%',
    padding: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary
  }
})
class MovieDetails extends React.Component {
  state = {
    name: '',
    synopsis: '',
    bannerUrl: '',
    stills: [],
    clips: [],
    status: 'now-showing',
    loading:true,
    open: false
  };

  componentWillUnmount(){
    document.removeEventListener('keydown', this.closeDialog)
  }

  closeDialog = (event) =>{
    if(event.keyCode === 27) {
      this.setState({open: false})
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.closeDialog)

    let id = this.props.match.params.id
    this.setState({loading:true})
    if (id) {
      this.fetchMovieDetails(id).then(resp => {
        let { name, synopsis, bannerUrl, stills, clips, status } = resp.data
        this.setState({ name, synopsis, bannerUrl, stills, clips, status, loading: false })
      }).catch(()=>{
        this.setState({loading:false})
      })
    }
  }

  fetchMovieDetails(id) {
    // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        let movieDetail = {
          data: {
            id:id,
            name: 'Gully Boy',
            synopsis: synopsis,
            bannerUrl:
              'https://img.spicinemas.in/resources/images/home/image-2.jpg',
            stills: [],
            clips: ['JfbxcD6biOk'],
            status: 'now-showing'
          }
        }
        
        resolve(movieDetail)
      }, 3000)
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <img
              width={1500}
              src={this.state.bannerUrl}
            />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.paper}>
              <Typography
                gutterBottom
                align='left'
                style={{ fontSize: '20px', fontWeight: 'bold' }}
                variant='heading'
              >
                Synopsis
              </Typography>
              <Typography align='left' style={{ fontSize: '15px' }}>
                <p>{this.state.synopsis}</p>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                gutterBottom
                align='left'
                style={{ fontSize: '20px', fontWeight: 'bold' }}
                variant='heading'
              >
                Trailers and Clips
              </Typography>
              <Layout col={3}>
                <img src='http://i1.ytimg.com/vi/JfbxcD6biOk/default.jpg'  onClick={()=>{this.setState({open: true , videoId: 'JfbxcD6biOk'})}}/>
                <img src='http://i2.ytimg.com/vi/JfbxcD6biOk/default.jpg' onClick={()=>{this.setState({open: true})}}/>
                <img src='http://i3.ytimg.com/vi/JfbxcD6biOk/default.jpg' onClick={()=>{this.setState({open: true})}}/>
              </Layout>
              <YoutubeDialogue videoId={this.state.videoId} open={this.state.open} />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              <Typography
                variant='h6'
                style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}
              >
                BOOK A TICKET
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
}

export default withStyles(styles)(MovieDetails)
