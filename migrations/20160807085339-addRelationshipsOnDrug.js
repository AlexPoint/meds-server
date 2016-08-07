'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn(
      'Compositions',
      'drugId',
      Sequelize.INTEGER,
      {
        references: {
            model: 'Drug',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    )
    queryInterface.addColumn(
      'Presentations',
      'drugId',
      Sequelize.INTEGER,
      {
        references: {
            model: 'Drug',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('Compositions', 'drugId');
    queryInterface.removeColumn('Presentations', 'drugId');
  }
};
