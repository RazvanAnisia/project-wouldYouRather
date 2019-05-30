import { combineReducers } from 'redux'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading-bar'
import users from './users'
import questions from './questions'


export default combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
})
