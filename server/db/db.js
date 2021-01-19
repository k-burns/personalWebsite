const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name

const db = new Sequelize(
  `postgres://kbpeuptwajzxll:8313e3e5ca674bca61a74956aa185ccde9f07ecb9ab17892edffc13006f48593@ec2-34-192-72-159.compute-1.amazonaws.com:5432/da41fdbgi1s055?sslmode=require`,
  {
    logging: false
  }
)
module.exports = db
