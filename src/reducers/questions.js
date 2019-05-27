import {
  SAVE_QUESTION,
  SAVE_QUESTION_VOTE,
  QUESTIONS_UPDATE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case SAVE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case SAVE_QUESTION_VOTE : {
      const votes = state[action.qid][action.answer].votes
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.qid][action.answer],
            votes : votes.concat([action.authedUser])
          }
        }
      }
    }
  
    case QUESTIONS_UPDATE :
      return {
        ...state,
        ...action.questions
      }
    default :
      return state
  }
}
