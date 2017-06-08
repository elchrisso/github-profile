import React, { Component } from 'react'
import './UserAvatar.css'
import PropTypes from 'prop-types'

class UserAvatar extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <img src={this.props.imageUrl} alt="" />
      //<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
    )
  }
}

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default UserAvatar