import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-faded">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </nav>
    )
  }
}

export default Navbar