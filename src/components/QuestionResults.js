import React, { Component } from 'react'

export default class QuestionResults extends Component {
    
    render() {
        const { question, optionOne, optionTwo } = this.props;
        const optOneVotes = question.optionOne.votes.length
        const optTwoVotes = question.optionTwo.votes.length
        const totalVotes = optOneVotes + optTwoVotes
        const optOnePercentage = Math.round((optOneVotes / totalVotes) * 100);
        const optTwoPercentage = Math.round((optTwoVotes / totalVotes) * 100);
       
  
        return (
            <div className="question-list-container">
            <ul className="list-group">
            <div className="list-group-item">
                <div className="card" >
                <div className="card-header">Asked by{this.props.author.name}</div>
                <div className="card-body">
                    <img alt="avatar"  style={{width:'150px'}} src={this.props.author.avatarURL} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Would you rather:</h5>
                    <ul className="list-group col-10 mb-3">
                        <div className="list-group-item">
                            { optionOne ? <span className="badge badge-success">You Voted</span> : null}
                            <p>{this.props.question.optionOne.text}</p>
                            <div className="progress">
                             <div className="progress-bar" role="progressbar"  style={{width: `${optOnePercentage.toString()}%`}} aria-valuenow={optTwoPercentage} aria-valuemin="0" aria-valuemax="100">{optOnePercentage}%</div>                            
                            </div>
                            <p>{optOneVotes} out of {totalVotes} votes</p>
                        </div>
                        <div className="list-group-item">
                        { optionTwo ? <span className="badge badge-success">You Voted</span> : null}
                        <p>{this.props.question.optionTwo.text}</p>
                        <div className="progress">
                             <div className="progress-bar" role="progressbar" style={{width: `${optTwoPercentage.toString()}%`}} aria-valuenow={optTwoPercentage} aria-valuemin="0" aria-valuemax="100">{optTwoPercentage}%</div>
                            </div>
                            <p>{optTwoVotes} out of {totalVotes} votes</p>
                        </div>
                    </ul>
                </div>
                </div>
            </div>
            </ul>
        </div>
        )
    }
}
