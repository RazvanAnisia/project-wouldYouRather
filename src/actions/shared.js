import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {
  _saveQuestion,
  _saveQuestionAnswer } from '../utils/_DATA'
import {
  saveUserQuestion,
  removeUserQuestion,
  saveUserAnswer,
  removeUserAnswer,
  fetchUsers } from './users'
import {
  saveQuestion,
  saveQuestionVote,
  fetchQuestions } from './questions'

export function handleSaveQuestion (author, optionOneText, optionTwoText) {
  const question = {
    author: author,
    optionOneText: optionOneText,
    optionTwoText: optionTwoText
  }
  return (dispatch) => {
    return _saveQuestion(question).then((q) => {
      dispatch(saveQuestion(q))
      dispatch(saveUserQuestion(q.author, q.id))
    }).catch(() => {     
      alert('There was an error saving your question. Please try again.')
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
      alert('There was an error saving your vote. Please try again.')
    })
  }
}

export function fetchInitialData () {
  return (dispatch) => Promise.all([
    dispatch(showLoading()),
    dispatch(fetchUsers()),
    dispatch(fetchQuestions())
  ]).then(() => {
    dispatch(hideLoading())
  })
}
