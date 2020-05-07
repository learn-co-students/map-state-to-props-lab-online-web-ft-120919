import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( (user, index) => {
            return <li key={index}>{user.username}</li>
          })}
        </ul>
        <p>Total Users: {this.props.users.length}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)