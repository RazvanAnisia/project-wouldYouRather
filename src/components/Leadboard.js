import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leadboard extends Component {
    render() {
        
        return (
            <div className="container col-6 mt-3">
            {this.props.leaders.map((leader, index) => (
               (<div className="list-group" key={index}>
               <div className="list-group-item">
               <span className="badge badge-primary">{index + 1}</span>
               <div className="row">                     
                   <img alt="avatar" className="col-3" style={{height:'180px'}} src={leader.avatarURL} />
                   <ul className="list-group col-6">
                       <li className="list-group-item"> {(Object.keys(leader.answers)).length} Answered Questions </li>
                       <li className="list-group-item"> { leader.questions.length } Created Questions </li>
                   </ul>
                   <div className="card col-3" >
                       <div className="card-body">
                           <h5 className="card-title">Score</h5>
                           <h6 className="card-subtitle mb-2 text-muted"> { (Object.keys(leader.answers)).length + leader.questions.length } </h6>
                       </div>
                   </div>
               </div>
               </div>
           </div>)
              ))}
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