'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    content: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
    Tweet.belongsTo(models.User, {
      foreignKey: 'userID',
      as: 'name',
      onDelete: 'CASCADE',
    })
  };
  return Tweet;
};