'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cis: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      form: {
        type: Sequelize.STRING
      },
      adminRoute: {
        type: Sequelize.STRING
      },
      authStatus: {
        type: Sequelize.STRING
      },
      authType: {
        type: Sequelize.STRING
      },
      authDate: {
        type: Sequelize.DATE
      },
      marketState: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      euroAuthNb: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      enforcedMonitoring: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Drugs');
  }
};