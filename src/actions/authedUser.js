export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER_FROM_STORAGE = 'GET_AUTHED_USER_FROM_COOKIE'
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function getAuthedUserFromStorage () {
  return {
    type: GET_AUTHED_USER_FROM_STORAGE,
  }
}

export function logoutAuthedUser () {
  return {
    type: LOGOUT_AUTHED_USER,
  }
}
