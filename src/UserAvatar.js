import React, { Component } from 'react'
import './UserAvatar.css'
import PropTypes from 'prop-types'

class UserAvatar extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <img src={this.props.imageUrl} alt="" />
        <div className="btn-group">
          <input type="text" className="form-control"/>
          <button className="btn">i am a button</button>
        </div>
      </div>

    )
  }
}

UserAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default UserAvatar