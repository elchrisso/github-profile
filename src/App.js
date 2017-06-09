import React, { Component } from 'react'
import './App.css'
import ProjectBox from './ProjectBox'
import Navbar from './Navbar'
import UserAvatar from './UserAvatar'
import ProjectNavTabs from './ProjectNavTabs'

class App extends Component {
  constructor () {
    super()
    this.state = {
      imageUrl: 'https://avatars0.githubusercontent.com/u/19591944?v=3&s=460',
      projects: [
        ["project1", "this is the first fake project in the list"],
        ["project2", "this is not the first fake in the list"],
        ["project3", "more fake stuff"],
        ["project4", "fake project descriptions for dayzzzzzzz"],
        ["project5", "more of the same"],
        ["project6", "the best fake project, at least until another is added"]
        ]
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="row">
          <section className="col-3">
            <UserAvatar imageUrl={this.state.imageUrl}/>
          </section>
          <section className="col-9">
            <div className="container-fluid">
              <ProjectNavTabs/>
            </div>
            <div className="twocoldiv">
                <ProjectBox projectList={this.state.projects}/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
