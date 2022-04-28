'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studenttbl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Studenttbl.init({
    name: DataTypes.STRING,
    idClassRoom: DataTypes.NUMBER,
    idMapel: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Studenttbl',
  });
  return Studenttbl;
};