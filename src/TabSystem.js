import React, { component } from 'react'

class TabSystem extends Component {
  render() {
    return(
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    )
  }
}

export default TabSystem