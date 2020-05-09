import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( (user, i) => <li key={i}>{user.username}</li>)}

        </ul>
        <p>Users: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
