import React, { Component } from 'react'
import './UserAvatar.css'

class UserAvatar extends Component {
  constructor () {
    super()
    this.state = {
      imageUrl: 'https://avatars0.githubusercontent.com/u/19591944?v=3&s=460'
    }
  }

  render () {
    return (
      <img src={this.state.imageUrl} alt="" />
      //<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
    )
  }
}

export default UserAvatar