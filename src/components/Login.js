import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  submitHandler = e => {
    e.preventDefault();
    const user = e.target.children[0].children[0].value;
    this.props.dispatch(setAuthedUser(user));
    //send newly logged in user to the homepage
    // this.props.history.push("/");
  };
  render() {
    return (
      <div className="container card col-3 mt-3">
        <h5 className="card-header">Please Log In</h5>
        <div className="container" style={{flexDirection: "column", display: "flex", alignItems: "center"}}>
          <img alt="login " className="login-img"
            src="https://prodimage.images-bn.com/pimages/9781620091623_p0_v6_s550x406.jpg"/>
          <form  style={{margin:'0 auto'}} className="login-form col-10" onSubmit={this.submitHandler}>
            <div className="form-group text-center">
              <select className="form-control" id="exampleFormControlSelect1">
                {Object.values(this.props.users).map(user => (
                  <option 
                    key={user.id}
                    value={user.id}>
                    {user.id}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary mt-1">
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
