import React, { Component } from "react";

class About extends Component {
  render() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'Git']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
          <h1>Guilherme Garcia</h1>
          <p>Brazilian, 22 years old, living in Porto Feliz/SP</p>
          <h2>My Skills</h2>
          <ol>{jsxSkills}</ol>
      </div>
    )
  }
}

export default About