'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize,
      modelName: 'Airplane'
    }
  );

  return Airplane;
};