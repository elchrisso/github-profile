import React, { Component } from 'react'


class ProjectNavTabs extends Component {
  render () {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav nav-pills">
            <li role="presentation" class="btn"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Messages</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default ProjectNavTabs