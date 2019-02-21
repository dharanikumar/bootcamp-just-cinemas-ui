import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'

const styles = {
  row: {
    marginTop: 20
  }
}

class MovieGrid extends Component {
  componentDidMount() {}

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false
      ? this.showError()
      : this.showMovies()
  }

  showMovies() {
    var { classes } = this.props
    let { 
      fetching, items
    } = this.props.movies
    if(fetching){
      return(
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <Grid container spacing={8}>
          {items.map((movie, index) => (
            <Grid
              key={index}
              xs={2}
              className={classes.row}
              justify="center"
              spacing={Number(2)}
            >
              <MovieItem movie={movie} slug={movie.slug} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  showProgress() {
    return <div>Loading...</div>
  }

  showError() {
    return <div>Error...</div>
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  }
}

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.bool
  }),
  classes: PropTypes.object
}
export default withStyles(styles)(MovieGrid)
