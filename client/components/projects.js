import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const Projects = props => {
  return (
    <div>
      <h1>Projects</h1>
      <h2>Just Ducks</h2>
      <h2>Don't Feed Ducks Bread</h2>
      <h2>Ariadne's Vim</h2>
    </div>
  )
}

export default Projects
