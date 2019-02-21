import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import { withStyles } from '@material-ui/core'
import Layout from '../app/core/Layout'

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
    let { fetching, items } = this.props.movies
    if (fetching) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Layout col={6} >
          {items.map((movie) => (
          
            <MovieItem key={movie.id} movie={movie} slug={movie.slug} />
         
          ))}
        </Layout>
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
