import React from 'react'
import {connect} from 'react-redux'
import SingleProject from './singleProject.js'
import {fetchProjects} from '../store/projects'

const defaultState = {
  title: '',
  details: '',
  img: '',
  github: '',
  deployed: ''
}

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }
  componentDidMount() {
    this.props.getProjects()
  }
  render() {
    const projects = this.props.projects || []
    console.log(this.props.projects)
    return (
      <div>
        <h1>Projects</h1>
        <h3>Click on an image for more detail</h3>
        <div className="container">
          {projects.map(project => (
            <SingleProject
              project={project}
              key={project.name}
              getProjects={this.props.getProjects}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  projects: state
})

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(fetchProjects())
})

const Projects = connect(mapState, mapDispatch)(Project)

export default Projects
