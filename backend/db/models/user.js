'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    handle: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    points: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};