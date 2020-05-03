const Sequelize = require('sequelize');
const db = require('../../db');

const Tweet = db.define('tweet', {
  tweet_content: {
    type: Sequelize.STRING
  },
  tweet_date: {
    type: Sequelize.DATE
  }
})

module.exports = Tweet;