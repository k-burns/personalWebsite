const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('projects', {
  title: {
    type: Sequelize.STRING
  },
  details: {
    type: Sequelize.TEXT
  },
  img: {
    type: Sequelize.TEXT
  },
  github: {
    type: Sequelize.TEXT
  },
  deployed: {
    type: Sequelize.TEXT
  }
})

module.exports = Projects
