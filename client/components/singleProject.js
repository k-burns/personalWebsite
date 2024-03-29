import React from 'react'

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
      <div className="project">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="front">
              <img src={img} className="project-img" />
            </div>
            <div className="back">
              <h1>{title}</h1>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div className="links">
          <a href={github} target="_blank" rel="noreferrer">
            github
          </a>
          {deployed ? (
            <a href={deployed} target="_blank" rel="noreferrer">
              deployed
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default SingleProduct
