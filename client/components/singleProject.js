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
      <li id="singleProject">
        <div className="projectInfo">
          <h3>{title}</h3>
          <h3>{details}</h3>
          <h3>{github}</h3>
          <h3>{deployed}</h3>
        </div>
      </li>
    )
  }
}

export default SingleProduct
