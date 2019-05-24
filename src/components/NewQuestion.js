import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared.js'

class NewQuestion extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const optionOne = e.target.children[0].children[1].value;
        const optionTwo = e.target.children[1].children[1].value;
        
        //dispatch the action
        this.props.dispatch(handleSaveQuestion(this.props.authedUser, optionOne, optionTwo))
        this.props.history.push('/')
    }

    render() {
        return (
            <div class="container col-6 ">
                <div class="card mt-3 col-12 pb-3 pt-3">
                    <h5 class="card-header">Add a new question</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="optionOne">WOULD YOU RATHER</label>
                            <input type="text" className="form-control" id="optionOne" aria-describedby="emailHelp" placeholder="First Option"/>
                            
                        </div>
                        <div className="form-group">
                            <label for="optionTwo">OR</label>
                            <input type="text" className="form-control" id="optionTwo" placeholder="Second option"/>
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ authedUser }) {
    return { authedUser: authedUser }
  }
  
export default connect(mapStateToProps)(NewQuestion)
  