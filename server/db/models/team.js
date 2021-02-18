const Sequelize = require('sequelize')
const db = require('../db')

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.TEXT
  },
  stack: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  experience: {
    type: Sequelize.STRING
  },
  hero: {
    type: Sequelize.TEXT
  },
  fact: {
    type: Sequelize.TEXT
  }
})

module.exports = Team
