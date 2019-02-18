import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
class MovieGrid extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    if(this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div>
          <Grid container  spacing={8}>
                    {this.props.movies.items.map(({ name, slug }) => (
                    <Grid  xs={2} justify="center" spacing={Number(2)}>
                        <MovieItem name={name} slug={slug}/>
                    </Grid>                  
                  ))}
               </Grid>

      </div>
    );
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  },
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
};

export default connect(
  (state) => ({
    movies: state.movies
  }), 
  (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies())
  }))(MovieGrid);
