import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Users extends Component {
  render () {
    var friends = this.props.list.filter(function(user) {
      return user.friend === true
    })

    var nonFriends = this.props.list.filter(function(user) {
      return user.friend !== true
    })

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user) {
            return (
              <li key={user.name}>{user.name}</li>
            )
          })}
        </ul>
        <hr/>
        <h1>Non-Friends</h1>
        <ul>
          {nonFriends.map(function(user) {
            return(
              <li key={user.name}>{user.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.arryOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}
export default Users;
