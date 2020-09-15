'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGoal = sequelize.define('user_goal', {
    goal_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    answer: DataTypes.TEXT
  }, {});
  UserGoal.associate = function(models) {
    // associations can be defined here
  };
  return UserGoal;
};