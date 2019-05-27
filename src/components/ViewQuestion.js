import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'


class ViewQuestion extends Component{
   
    render() {
        const { question, answered } = this.props;
        return (
            <div className="question-list-container">
            <ul className="list-group">
            <div className="list-group-item">
                <div className="card" >
                <div className="card-header">{this.props.author.name} asked</div>
                <div className="card-body">
                    <img  alt="avatar" style={{width:'150px'}} src={this.props.author.avatarURL} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Would you rather:</h5>
                    <ul className="list-group col-10 mb-3">
                        <p className="list-group-item">
                            {question.optionOne.text}
                        </p>
                        <p className="list-group-item">
                        {question.optionTwo.text}
                        </p>
                    </ul>
                    <Link to={`/questions/${question.id}`} className="btn btn-primary">
                       { answered ? "View Results" :   "View Poll" }
                    </Link>
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

export default connect(mapStateToProps)( ViewQuestion );