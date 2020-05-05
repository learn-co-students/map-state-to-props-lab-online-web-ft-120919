import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {


  render() {
	console.log(this.props.users)
	  if (this.props.users.length !== 0) {
    return (
      <div>
        <ul>
          Users!
		  {this.props.users.map(user => {
			  return <li key={user.username}>{user.username}</li>
		  })}
          {this.props.users.length}
        </ul>
      </div>
    )
  } else {
	return (
		<div>
			<ul>
			Users!
			
			</ul>
		</div>
	) }
}
}

const mapStateToProps = (state) => {
	
	return {
		users: state.users
	}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
