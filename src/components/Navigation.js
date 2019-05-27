import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

class Navigation extends Component {
  logout = e => {
    e.preventDefault();
    this.props.dispatch(logoutAuthedUser());
  };

  render() {
    const authedNav = (
      <div className="collapse navbar-collapse " id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/leadboard">
              Leadboard
            </NavLink>
          </li>
        </ul>
        <div className="navbar-user-info">
          {this.props.userName}
          <img
            alt="avatar"
            style={{ height: "50px", marginLeft: "10px" }}
            className="avatar"
            src={this.props.avatar}
          />
          <span className="nav-item">
            <a className="nav-link" href="#" onClick={this.logout}>
              Logout
            </a>
          </span>
        </div>
      </div>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
        <NavLink className="navbar-brand" to="/">
          Would You Rather{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {this.props.authedUser ? authedNav : null}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    userName: users[authedUser] ? users[authedUser].name : null,
    avatar: users[authedUser] ? users[authedUser].avatarURL : null
  };
}

export default connect(mapStateToProps)(Navigation);
