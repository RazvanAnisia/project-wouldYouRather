import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { saveQuestionVote, saveQuestion, fetchQuestions } from './questions'
import { saveUserQuestion, saveUserAnswer, fetchUsers } from './users'


export function handleSaveQuestion (author, optionOneText, optionTwoText) {
  const question = {
    author: author,
    optionOneText: optionOneText,
    optionTwoText: optionTwoText
  }
  return (dispatch) => {
    return _saveQuestion(question).then((question) => {
      dispatch(saveQuestion(question))
      dispatch(saveUserQuestion(question.author, question.id))
    }).catch(() => {     
      alert('There was an error saving your question.')
    })
  }
}


export function handleVote (authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveQuestionVote(authedUser, qid, answer))
    dispatch(saveUserAnswer(authedUser, qid, answer))
    return _saveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer
    }).catch(() => {     
      alert('There was an error saving your vote.')
    })
  }
}

//fetch the inital data to initialize the app
export function fetchInitialData () {
  return (dispatch) => Promise.all([
    dispatch(showLoading()),
    dispatch(fetchUsers()),
    dispatch(fetchQuestions())
  ]).then(() => {
    dispatch(hideLoading())
  })
}
