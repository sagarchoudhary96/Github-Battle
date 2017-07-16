import React, { Component } from 'react'

import { PropTypes } from 'prop-types'

function PlayerPreview(props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for' + props.username}
          />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset(props.id)}>
          Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}


class PlayerInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleChange = (event) => {
    var value = event.target.value
    console.log(value)
    this.setState(() => {
      return {
        username: value
      }
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render () {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
          />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}


class Battle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
  }

  handleSubmit = (id, username) => {
    this.setState(()=> {
      var newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  handleReset = (id) => {
    this.setState(()=> {
      var newState = {}
      newState[id + 'Name'] = ''
      newState[id + 'Image'] = null
      return newState
    })

  }

  render () {
    var player1_name = this.state.playerOneName
    var player2_name = this.state.playerTwoName
    var player1_image = this.state.playerOneImage
    var player2_image = this.state.playerTwoImage
    return (
      <div>
        <div className='row'>
          {!player1_name &&
            <PlayerInput
              id='playerOne'
              username={player1_name}
              label='player One'
              onSubmit = {this.handleSubmit} />
          }

          {player1_image !== null &&
            <PlayerPreview
              avatar={player1_image}
              username={player1_name}
              onReset={this.handleReset}
              id='playerOne'/>
          }

          {!player2_name &&
            <PlayerInput
              id='playerTwo'
              username={player2_name}
              label='player Two'
              onSubmit={this.handleSubmit} />
          }

          {player2_image !== null &&
            <PlayerPreview
              avatar={player2_image}
              username={player2_name}
              onReset={this.handleReset}
              id='playerTwo'/>
          }
        </div>
      </div>
    )
  }
}

export default Battle;
