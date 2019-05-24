import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const firstRadioBtn =  e.target.children[0].children[0];
        const secondRadioBtn =  e.target.children[1].children[0];
        let optionPicked = '';
        firstRadioBtn.checked ? optionPicked = firstRadioBtn.value : optionPicked = secondRadioBtn.value;
       console.log(optionPicked)
 
    }

    render() {
    return (
      <div class="container mt-2">
       
              <div class="card">
                <div class="card-header">{this.props.author.name}</div>
                <div class="card-body">
                  <img
                    style={{ width: "150px" }}
                    src={this.props.author.avatarURL}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Would you rather:</h5>

                  <form onSubmit={this.handleSubmit}>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value={this.props.question.optionOne.text}
                        id="optionOne"
                        name='option'
                        checked={true}
                        
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        {this.props.question.optionOne.text}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value={this.props.question.optionTwo.text}
                        id="optionTwo"
                        name='option'
                      />
                      <label class="form-check-label" for="defaultCheck2">
                        {this.props.question.optionTwo.text}
                      </label>
                    </div>
                    <button class="btn btn-primary mt-2" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>    
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const currentQuestionId = window.location.href.split("/")[4];

  return {
    authedUser: authedUser,
    question: questions[currentQuestionId],
    author: users[questions[currentQuestionId].author]
  };
}
export default connect(mapStateToProps)(Question);
