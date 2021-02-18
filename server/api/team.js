const Team = require('../db/models/team')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const team = await Team.findAll()
    res.json(team)
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
