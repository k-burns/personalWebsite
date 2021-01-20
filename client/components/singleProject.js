import React from 'react'
import {Link} from 'react-router-dom'

const defaultState = {
  title: '',
  details: '',
  img: '',
  github: '',
  deployed: ''
}

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let project = this.props.project || defaultState
    this.setState({
      title: project.title,
      details: project.details,
      img: project.img,
      github: project.github,
      deployed: project.deployed
    })
  }

  render() {
    let {project} = this.props
    let {title, details, img, github, deployed} = project

    return (
      <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="front">
              <img src={project.img} />
            </div>
            <div className="back">
              <h1>{project.title}</h1>
              <p>{project.details}</p>
            </div>
          </div>
        </div>
        <div className="links">
          <a href={project.github} target="_blank">
            github
          </a>
          <a href={project.deployed} target="_blank">
            deployed
          </a>
        </div>
      </div>
    )
  }
}

export default SingleProduct
