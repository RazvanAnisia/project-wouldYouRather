import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leadboard extends Component {

    showLeaders = () => {
        
        return (
            <div className="container col-6 mt-3">
                {this.props.leaders.map((leader, index) => {
                const answeredQuestions = (Object.keys(leader.answers)).length
                const createdQuestions = leader.questions.length
                const score = (Object.keys(leader.answers)).length + leader.questions.length
               
                return (
                <div className="list-group" key={index}>
                <div className="list-group-item">
                    <span className="badge badge-primary">{index + 1}</span>
                    <div className="row">                     
                        <img alt="avatar" className="col-4" style={{height:'180px'}} src={leader.avatarURL} />
                        <ul className="list-group col-5">
                            <li className="list-group-item"> {answeredQuestions} Answered Questions </li>
                            <li className="list-group-item"> { createdQuestions } Created Questions </li>
                        </ul>
                        <div className="card col-3" >
                            <div className="card-body">
                                <h5 className="card-title">Score</h5>
                                <h6 className="card-subtitle mb-2 text-muted"> { score } </h6>
                            </div>
                        </div>
                    </div>
                </div>
              </div>)}
                )}
            </div>
        )
    }
    render() {
                
        return (
           <div>
               {this.showLeaders()}
           </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    const sortedUsers = (Object.values(users)).sort((a, b) => {
        //get the score for each user object, adding up the answers and the questions they have so we can sort them 
        const aScore = (Object.keys(a.answers)).length + a.questions.length
        const bScore = (Object.keys(b.answers)).length + b.questions.length
        return bScore - aScore
    })
    return {
      authedUser,
      leaders: sortedUsers
    }
  }
  
  export default connect(mapStateToProps)(Leadboard)