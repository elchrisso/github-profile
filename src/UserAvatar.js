import React, { Component } from 'react'
import './UserAvatar.css'
import PropTypes from 'prop-types'

class UserAvatar extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="avatarDiv">
        <img src={this.props.imageUrl} className="avatarImage" alt="" />
        <h2>chris brown</h2>
        <a href="www.google.com" className="href">Add a bio</a>
        <button className="btn">i am a button</button>
      </div>

    )
  }
}

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default UserAvatar