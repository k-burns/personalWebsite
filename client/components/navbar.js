import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Katelynn Burns</h1>
    <nav>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/socialMedia">Social Media</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
