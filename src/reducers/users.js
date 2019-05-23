import {
  USERS_UPDATE,
  SAVE_USER_QUESTION,  
  SAVE_USER_ANSWER,
   } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case SAVE_USER_QUESTION :
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          questions: [...state[action.user].questions, action.qid]
        }
      }
   
    case SAVE_USER_ANSWER :
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          answers : {
            ...state[action.user].answers,
            [action.qid] : action.answer
          }
        }
      }
   
    case USERS_UPDATE :
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}
