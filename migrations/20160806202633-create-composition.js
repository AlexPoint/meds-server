'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Compositions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      substanceCode: {
        type: Sequelize.INTEGER
      },
      substanceName: {
        type: Sequelize.STRING
      },
      dosing: {
        type: Sequelize.STRING
      },
      refForDosing: {
        type: Sequelize.STRING
      },
      nature: {
        type: Sequelize.STRING
      },
      activeSubstanceToTherapeuticAction: {
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Compositions');
  }
};