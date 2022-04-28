'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mapeltbl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mapeltbl.init({
    name: DataTypes.STRING,
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mapeltbl',
  });
  return Mapeltbl;
};