import React, { Component } from 'react';
import { connect } from 'react-redux'


// add any needed imports here
class Users extends Component {

  
  render() {
  const userElem = this.props.users.map( user => <li>{user.username}</li>)
    // console.log('user elem', userElem)
    return (
      <div>
        <ul>
          Users!
          

          {userElem}
          
          <br></br>
          <br></br>

          User count: <br></br>
          {userElem.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users
  }
}


// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);

