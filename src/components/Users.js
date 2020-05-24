import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    
    listOfUsers = () => {
        return this.props.users.map(user => {
            return <li>{user.username}</li>
        })
    }

  render() {
    return (
      <div>
        <ul>
          Users!
            {this.listOfUsers()}
        </ul>
          <p>{this.props.users.length}</p>
      </div>
    )
  }
}



//add mapStateToProps here
const mapStateToProps = state => {
    return {
        users: state.users
    };
};
export default connect(mapStateToProps)(Users);
