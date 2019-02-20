import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MoviesGrid from '../movies/MovieGrid'

import { connect } from 'react-redux'
import fetchNowShowingMovies from '../store/actions/nowShowingAction'
import fetchComingSoonMovies from '../store/actions/comingSoonAction'


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    fontSize: 16,
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  },
})

class CustomizedTabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  handleChange = (event, value) => {
    this.setState({ tabIndex: value })
  }

  componentDidMount(){
    this.props.fetchNowShowingMovies()
    this.props.fetchComingSoonMovies()
  }

  render() {
    const { classes, nowShowingMovies, upComingMovies } = this.props
    const { tabIndex } = this.state
    let movies = tabIndex === 0 ? nowShowingMovies : upComingMovies
    return (
      <div className={classes.root}>
        <Tabs
          value={ tabIndex }
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            // disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Now Showing"
          />
          <Tab
            // disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Upcoming"
          />
        </Tabs>
        <MoviesGrid movies={movies}/>
      </div>
    )
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  nowShowingMovies: PropTypes.object,
  upComingMovies: PropTypes.object,
  fetchNowShowingMovies: PropTypes.func,
  fetchComingSoonMovies: PropTypes.func

}
export default connect(
  (state) => ({
    nowShowingMovies: state.nowShowingMovies,
    upComingMovies: state.upComingMovies,
  }), 
  (dispatch) => ({
    fetchNowShowingMovies: () => dispatch(fetchNowShowingMovies()),
    fetchComingSoonMovies: () => dispatch(fetchComingSoonMovies())
  }))(withStyles(styles)(CustomizedTabs))
