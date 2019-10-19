'use strict';
module.exports = (sequelize, DataTypes) => {
  const techrolemodel = sequelize.define('techrolemodel', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  techrolemodel.associate = function(models) {
    // associations can be defined here
  };
  return techrolemodel;
};