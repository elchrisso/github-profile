import React, { Component } from 'react'
import './App.css'
import ProjectBox from './ProjectBox'
import Navbar from './Navbar'
import UserAvatar from './UserAvatar'
import ProjectNavTabs from './ProjectNavTabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="row">
          <section className="col-3">
            <UserAvatar />
          </section>
          <section className="col-9">
            <div className="col">
              <ProjectNavTabs/>
            </div>
            <div className="twocoldiv">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
