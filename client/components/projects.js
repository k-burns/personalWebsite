import React from 'react'
import {connect} from 'react-redux'
import SingleProject from './singleProject.js'
import {fetchProjects} from '../store/projects'
import ReactDOMServer from 'react-dom/server'

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
    this.rendered = false
    this.createContainer = this.createContainer.bind(this)
    this.setColumns = this.setColumns.bind(this)
    this.insertProjects = this.insertProjects.bind(this)
    this.onFirstUpdate = this.onFirstUpdate.bind(this)
  }
  componentDidMount() {
    console.log('mount')
    this.props.getProjects()
    this.rendered = true
    // this.setColumns(this.props.projects.length, document.getElementById('project-container'))
  }
  createContainer(needed, div) {
    console.log('con')
    let next = 0
    let prev = 0
    for (let i = 1; i <= needed; i++) {
      if (i === 1) {
        prev = needed
      } else {
        prev = i - 1
      }
      if (i === needed) {
        next = 1
      } else {
        next = i + 1
      }
      div.insertAdjacentHTML(
        'beforeend',
        `<section id = 'container_${i}'><a href= '#container_${prev}'class = 'arrows left_arrow'><</a><a href= '#container_${next}'  class = 'arrows right_arrow' id = 'anch_${i}'>></a></section>`
      )
    }
  }

  insertProjects(projects) {
    let curr = 0
    let container = 1
    console.log('here')
    console.log('there')
    this.rendered = false
    projects.map(project => {
      console.log('hi')
      if (curr > 1) {
        curr = 0
        container++
      }
      curr++
      let string = ReactDOMServer.renderToString(
        <SingleProject
          project={project}
          key={project.name}
          getProjects={this.props.getProjects}
        />
      )
      const newDiv = document.createElement('div')
      newDiv.classList.add('project-item')
      newDiv.innerHTML = string
      document
        .getElementById(`container_${container}`)
        .insertBefore(newDiv, document.getElementById(`anch_${container}`))
    })
  }

  setColumns(size, element) {
    element.style.gridTemplateColumns = `repeat(${size}, 100%)`
  }

  onFirstUpdate(needed, div, projects) {
    if (this.rendered) {
      console.log('once')
      this.createContainer(needed, div)
      this.insertProjects(projects)
    }
    this.rendered = false
  }

  render() {
    const projects = this.props.projects || []
    let needed = Math.ceil(projects.length / 2)

    return (
      <div className="flex-project">
        <h1>Projects</h1>
        <h3>Click on an image for more detail</h3>
        <div className="container" id="project-container">
          {this.onFirstUpdate(
            needed,
            document.getElementById('project-container'),
            projects
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  projects: state.projects
})

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(fetchProjects())
})

export default connect(mapState, mapDispatch)(Project)
