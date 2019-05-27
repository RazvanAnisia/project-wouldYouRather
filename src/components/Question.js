import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionToAnswer from './QuestionToAnswer'
import QuestionResults from './QuestionResults'
import NoResultsPage from './NoResultPage'

class Question extends Component {
  
  validUrl = () => {
    const optionOne = this.props.question.optionOne.votes.includes(this.props.authedUser);
    const optionTwo = this.props.question.optionTwo.votes.includes(this.props.authedUser);
    const questionMarkup = (
     <div className="container mt-2">
     { (optionOne || optionTwo ) 
       ? <QuestionResults
       optionOne={optionOne}
       optionTwo={optionTwo}
       author={this.props.author}
       question={this.props.question}/>
       :  <QuestionToAnswer
       author={this.props.author}
       question={this.props.question} />
     }
   </div>    
    )
     return questionMarkup;
  }
    render() {
    return (
      <div className='col-12'>
       {this.props.hasValidQuestionURL ? this.validUrl() : <NoResultsPage/>}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const currentQuestionId = window.location.href.split("/")[4];
  const validQuestionURL = questions[currentQuestionId]
  
  if(validQuestionURL) {
    return {
      hasValidQuestionURL:true,
      authedUser: authedUser,
      question: questions[currentQuestionId],
      author: users[questions[currentQuestionId].author] 
    };
  } 
    return {
      hasValidQuestionURL:false
    }
  

  
}
export default connect(mapStateToProps)(Question);
