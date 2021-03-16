import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Projects from './components/projects'
import SocialMedia from './components/socialMedia'
import Contact from './components/contact'
import About from './components/about'
import {Navbar} from './components'
import Main from './components/main'

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <main>
          <Route exact path="/" component={Main} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/socialMedia" component={SocialMedia} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  )
}

export default Routes
