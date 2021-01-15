import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

const SocialMedia = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <h1>Social Media</h1>
      <div>
        <a href="https://twitter.com/Katelyn41648210" target="_blank">
          Twitter
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/katelynn-burns/" target="_blank">
          LinkdIn
        </a>
      </div>
      <div>
        <a href="https://katelynnburns655.medium.com/" target="_blank">
          Medium
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
