'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    content: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};