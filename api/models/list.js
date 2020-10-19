'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {}

  List.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 100],
        notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 300],
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'list'
  });

  List.associate = (models) => {
    // associations can be defined here
    List.hasMany(models.ListItem, {
      foreignKey: 'listId',
      as: 'listItems',
      onDelete: 'CASCADE',}
    );


  };

  return List;
};