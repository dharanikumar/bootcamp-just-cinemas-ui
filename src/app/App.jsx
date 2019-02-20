import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from '../store/store'
import createHistory from 'history/createBrowserHistory'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import MovieDetails from '../movies/MovieDetails'

const browserHistory = createHistory()

const store = configureStore(browserHistory)

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={MovieDetails} path="/movies" />
    </Switch>
  </ConnectedRouter>
)

const Main = () => (
  <div className="app-container">
    <Header />
    <Routes />
    <Footer/>
  </div>  
)

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
)

export default App
