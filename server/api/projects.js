const Projects = require('../db/models/projects')

const router = require('express').Router()

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await Projects.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
