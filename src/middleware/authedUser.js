import {
  SET_AUTHED_USER,
  GET_AUTHED_USER_FROM_STORAGE,
  LOGOUT_AUTHED_USER } from '../actions/authedUser'

  //use local storage for auth
const localStorage = window.localStorage;

const authedUser = (store) => (next) => (action) => {
  switch (action.type) {

    case SET_AUTHED_USER :
    
      localStorage.setItem('user', action.id)
      return next(action)

    case GET_AUTHED_USER_FROM_STORAGE :
    
      const authedUser = localStorage.getItem('user')
      action.id = authedUser ? authedUser : null
      return next(action)

    case LOGOUT_AUTHED_USER :
      localStorage.clear()
      action.id = null
      return next(action)

    default :
      return next(action)
  }
}

export default authedUser
