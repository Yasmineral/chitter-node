const Sequelize = require('sequelize');
const db = require('../../db');

const User = db.define('user', {
  user_name: {
    type: Sequelize.STRING
  },
  user_email: {
    type: Sequelize.STRING
  },
  user_pass: {
    type: Sequelize.STRING
  }
})

module.exports = User;

