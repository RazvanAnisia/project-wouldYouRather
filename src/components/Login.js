import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  submitHandler = e => {
    e.preventDefault();
    const user = e.target.children[0].children[0].value;
    this.props.dispatch(setAuthedUser(user));
    //send newly logged in user to the homepage always
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container card col-6 mt-3">
        <h5 class="card-header">Please Log In</h5>
        <div className="container">
          <img className="login-img text-center"
            src="https://prodimage.images-bn.com/pimages/9781620091623_p0_v6_s550x406.jpg"/>
          <form  style={{margin:'0 auto'}}className="login-form col-6" onSubmit={this.submitHandler}>
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                {Object.values(this.props.users).map(user => (
                  <option key={user.id} value={user.id}>
                    {user.id}
                  </option>
                ))}
              </select>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);
