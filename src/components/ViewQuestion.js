import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'


class QuestionPreview extends Component{
   
    render() {
        const { question } = this.props;
        return (
            <div className="question-list-container">
            <ul class="list-group">
            <div class="list-group-item">
                <div class="card" >
                <div class="card-header">{this.props.author.name}</div>
                <div class="card-body">
                    <img  style={{width:'150px'}} src={this.props.author.avatarURL} />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Would you rather:</h5>
                    <ul class="list-group col-10 mb-3">
                        <p class="list-group-item">
                            {question.optionOne.text}
                        </p>
                        <p class="list-group-item">
                        {question.optionTwo.text}
                        </p>
                    </ul>
                    <Link to={`/questions/${question.id}`} class="btn btn-primary">Answer Question</Link>
                </div>
                </div>
            </div>
            </ul>
        </div>
        )
    }
}

function mapStateToProps({users} , ownProps){
    const questionAuthor = ownProps.question.author
    return {
        author: users[questionAuthor],

    }
}

export default connect(mapStateToProps)( QuestionPreview );