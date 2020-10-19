'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ListItem extends Model {}

  ListItem.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 100],
        notEmpty: true,
      }
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 300],
        notEmpty: true,
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        len: [0, 100],
        notEmpty: true,
      }
    },
    note: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 400],
        notEmpty: false,
      }
    }
  }, {
    sequelize,
    modelName: 'listItem'
  });

  ListItem.associate = (models) => {
    // associations can be defined here
    ListItem.belongsTo(models.List, {
      foreignKey: 'listId',
      as: 'listItems',
      onDelete: 'CASCADE',}
    );
  };

  return ListItem;
};