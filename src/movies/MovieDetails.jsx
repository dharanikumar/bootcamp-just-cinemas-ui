import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'
import Layout from '../app/core/Layout'
import YoutubeDialogue from '../app/core/YoutubeDialogue'
import Axios from 'axios'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 100
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
    trailers: [],
    loading: true,
    open: false
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeDialog)
  }

  closeDialog = event => {
    if (event.keyCode === 27) {
      this.setState({ open: false })
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.closeDialog)

    let id = this.props.match.params.id
    this.setState({ loading: true })
    if (id) {
      this.fetchMovieDetails(id)
        .then(resp => {
          let {
            name,
            synopsis,
            bannerUrl,
            stills,
            clips,
            status,
            trailers,
            iconUrl
          } = resp.data
          this.setState({
            name,
            synopsis,
            bannerUrl,
            stills,
            clips,
            status,
            trailers,
            iconUrl,
            loading: false
          })
        })
        .catch(() => {
          this.setState({ loading: false })
        })
    }
  }

  fetchMovieDetails(id) {
    // eslint-disable-next-line
    return Axios.get(`http://localhost:9090/v1/movies/${id}/`);
  
  }
  render() {
    const { classes } = this.props
    if (this.state.loading) {
      return (
        <div style={{ height: '100vh', marginTop: '100px' }}>Loading...</div>
      )
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <img width={1500} src={this.state.bannerUrl} />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.paper}>
              <Typography
                gutterBottom
                align="left"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
                variant="headline"
              >
                Synopsis
              </Typography>
              <Typography align="left" style={{ fontSize: '15px' }}>
                <p>{this.state.synopsis}</p>
              </Typography>
            </div>
            <Link to={'/book/${chennai}/kabali'}>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '16px'
                    }}
                  >
                    BOOK A TICKET
                  </Typography>
                </Button>
              </Grid>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography
                gutterBottom
                align="left"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
                variant="headline"
              >
                Trailers and Clips
              </Typography>
              <Layout col={3}>
                {this.state.trailers.map((trailer, index) => {
                  let videoId = trailer.url.match(/v=(.*)/g)[0].split('=')[1]
                  return (
                    <img
                      key={index}
                      src={`http://i1.ytimg.com/vi/${videoId}/default.jpg`}
                      onClick={() => {
                        this.setState({ open: true, videoId })
                      }}
                    />
                  )
                })}
              </Layout>
              <YoutubeDialogue
                videoId={this.state.videoId}
                open={this.state.open}
              />
            </Paper>
            <Paper className={classes.paper}>
              <Typography
                gutterBottom
                align="left"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
                variant="headline"
              >
                Stills
              </Typography>
              <Layout col={3}>
                {this.state.stills.map((still, index) => {
                  return (
                    <img key={index} src={still.url} />
                  )
                })}
              </Layout>
              <YoutubeDialogue
                videoId={this.state.videoId}
                open={this.state.open}
              />
            </Paper>
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
