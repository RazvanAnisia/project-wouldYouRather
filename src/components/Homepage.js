import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux'

 class Homepage extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Tabs defaultActiveKey={1} >
          <Tab eventKey={1} title="Unanswered Questions">
            <QuestionsList 
              questions={this.props.unanswered}
              answered={false} />
          </Tab>
          <Tab eventKey={2} title="Answered Questions">
            <QuestionsList 
              questions={this.props.answered}
              answered={true} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const questionsArr = Object.values(questions)
    const user = users[authedUser]
    const authedUsersAnswers = user ? Object.keys(user.answers) : []
    const answered = questionsArr.filter((question) => {
        //if the authedUserAnswers array includes the id of the question we are lopping through, then it means it has been answered
        return authedUsersAnswers.includes(question.id) ? question : null
    })
    const unanswered = questionsArr.filter((question) => {
        //if not, the it is unanswered
        return authedUsersAnswers.includes(question.id) ? null : question
      })

    return {
      answered: answered,
      unanswered: unanswered
    }
  }

export default connect(mapStateToProps)(Homepage)