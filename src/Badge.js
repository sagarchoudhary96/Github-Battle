import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Badge extends Component {
  render () {
    return(
      <div>
        <img
          src = {this.props.img}
          alt = 'Avatar'
          style = {{width:100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Badge;
