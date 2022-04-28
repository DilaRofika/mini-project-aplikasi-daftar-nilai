'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nilaitbl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nilaitbl.init({
    idMapel: DataTypes.NUMBER,
    idClassRoom: DataTypes.NUMBER,
    idStudent: DataTypes.NUMBER,
    nilai: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Nilaitbl',
  });
  return Nilaitbl;
};