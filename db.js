require('dotenv').config();
const Sequelize = require('sequelize')
const db = new Sequelize('chitter', 'postgres', process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))