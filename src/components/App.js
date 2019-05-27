import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Navigation from './Navigation'
import Leadboard from './Leadboard'
import { getAuthedUserFromStorage } from '../actions/authedUser'
import { fetchInitialData } from '../actions/shared'
import noResultsPage from './NoResultPage'
import Login from './Login'
import Homepage from './Homepage'
import NewQuestion from './NewQuestion'
import Question from './Question'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAuthedUserFromStorage())
    this.props.dispatch(fetchInitialData())
  }

  guestRoutes = () => (
    <Switch>
      <Route  path='/' component={Login} />
    </Switch>
  )

  authedRoutes = () => (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/add' component={NewQuestion} />
      <Route exact path='/leadboard' component={Leadboard} />
      <Route exact path='/questions/:questionId' component={Question} />
      <Route  component = {noResultsPage}/>
    </Switch>
  )

  showContent = () => (
        <div>
            {this.props.displayLogin
              ? this.guestRoutes()
              : this.authedRoutes()}
        </div>
  )

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar  style={{ backgroundColor: 'purple', height: '3px' }} className="loading" />
          <div className="App">
            <Navigation />
            {this.props.loading === true
              ? null
              : this.showContent()}
          </div>
        </div>
      </BrowserRouter>)
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    loading: Object.keys(questions).length === 0,
    displayLogin: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
