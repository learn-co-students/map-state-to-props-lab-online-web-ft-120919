import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users! {this.props.numberOfUsers}
          <UsersList users={this.props.users} />
        </ul>
      </div>
    );
  }
}
class UsersList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
