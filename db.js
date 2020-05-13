require('dotenv').config();
const Sequelize = require('sequelize')

module.exports = new Sequelize('chitter', 'postgres', process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
