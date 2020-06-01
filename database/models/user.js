module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Tweet, {
      foreignKey: 'userID',
      as: 'tweets',
      onDelete: 'CASCADE',
    })
  };
  return User;
};