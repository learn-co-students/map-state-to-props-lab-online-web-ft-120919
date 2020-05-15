import React, { Component } from 'react';
import {connect}  from 'react-redux';
// add any needed imports here




class Users extends Component {

  renderUsers() {
    return this.props.users.map(userInfo => {
      return (
        <li key={userInfo.username}>{userInfo.username}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps) (Users);
