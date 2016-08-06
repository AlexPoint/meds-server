'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Presentations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cip7: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      marketState: {
        type: Sequelize.STRING
      },
      authDate: {
        type: Sequelize.DATE
      },
      cip13: {
        type: Sequelize.STRING
      },
      publicAgreement: {
        type: Sequelize.BOOLEAN
      },
      reimbursementRate: {
        type: Sequelize.FLOAT
      },
      priceWithoutDistributor: {
        type: Sequelize.FLOAT
      },
      distributorPrice: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Presentations');
  }
};