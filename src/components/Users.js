import React, { Component } from 'react';
import { connect } from 'react-redux'


// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! <ul> </ul>
    {this.props.users.map(user => <ul>{`${user.username} - ${user.hometown}`}</ul>)}
          {this.props.count}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, count: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
