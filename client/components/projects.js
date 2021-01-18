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

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }
  componentDidMount() {
    console.log(this.props.getProjects)
    this.props.getProjects()
  }
  render() {
    const projects = this.props.projects || {}
    console.log(projects)
    return (
      <div>
        <h1>Projects</h1>
        <ol>
          {projects.map(project => (
            <SingleProject
              project={project}
              key={project.name}
              getProjects={this.props.getProjects}
            />
          ))}
        </ol>
      </div>
    )
  }
}

const mapState = state => ({
  projects: state.projects
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProjects())
})

connect(mapState, mapDispatch)(Projects)

export default Projects
