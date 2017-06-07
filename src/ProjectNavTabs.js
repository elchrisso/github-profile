import React, { Component } from 'react'


class ProjectNavTabs extends Component {
  render () {
    return (
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    )
  }
}

export default ProjectNavTabs