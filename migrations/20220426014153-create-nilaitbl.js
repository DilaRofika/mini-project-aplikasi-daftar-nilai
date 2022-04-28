'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nilaitbls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMapel: {allowNull: false,
        type: Sequelize.INTEGER
      },
      idClassRoom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idStudent: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nilai: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nilaitbls');
  }
};