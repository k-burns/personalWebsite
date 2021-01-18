import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Katelynn Burns</h1>
    <nav>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/socialMedia">Social Media</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Me</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
