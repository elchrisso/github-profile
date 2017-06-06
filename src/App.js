import React, { Component } from 'react'
import './App.css'
import ProjectBox from './ProjectBox'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="row">
          <section className="col-4">
            <ProjectBox />
          </section>
          <div className="twocoldiv">
            <div className="col">
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
