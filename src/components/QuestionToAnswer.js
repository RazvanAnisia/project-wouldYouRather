import React, { Component } from "react";
import { connect } from "react-redux";
import { handleVote } from "../actions/shared";

class QuestionToAnswer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const firstRadioBtn = e.target.children[0].children[0];
    const secondRadioBtn = e.target.children[1].children[0];
    
    let optionPicked = null;
    firstRadioBtn.checked
      ? (optionPicked = firstRadioBtn.id)
      : (optionPicked = secondRadioBtn.id);
    //if the user has picked an option
    if (optionPicked) {
      this.props.dispatch(
        handleVote(this.props.authedUser, this.props.question.id, optionPicked)
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">{this.props.author.name}</div>
        <div className="card-body">
          <img  alt="avatar" style={{ width: "150px" }} src={this.props.author.avatarURL} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Would you rather:</h5>

          <form onSubmit={this.handleSubmit}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={this.props.question.optionOne.text}
                id="optionOne"
                name="option"
                checked={true}
                readOnly
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                {this.props.question.optionOne.text}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={this.props.question.optionTwo.text}
                id="optionTwo"
                name="option"
              />
              <label className="form-check-label" htmlFor="defaultCheck2">
                {this.props.question.optionTwo.text}
              </label>
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(QuestionToAnswer);
