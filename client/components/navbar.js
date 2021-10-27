import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1 className="title">Katelynn Burns</h1>
    <nav>
      <div className="nav-links">
        <Link to="/">Team</Link>
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
