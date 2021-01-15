import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const Contact = props => {
  return (
    <div>
      <h1>Contact</h1>
      <h2>Email</h2>
      <h6>katelynnburns655@gmail.com</h6>
      <h2>Phone</h2>
      <h6>541-398-1208</h6>
    </div>
  )
}

export default Contact
