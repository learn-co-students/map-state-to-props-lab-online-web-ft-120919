import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
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
    //debugger 
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

function mapStateToProps(state) {
  return { users: state.users }
}//mapStateToProps

// connect this component to Redux
export default connect(mapStateToProps)(Users)
