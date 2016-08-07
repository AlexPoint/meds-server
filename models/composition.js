'use strict';
module.exports = function(sequelize, DataTypes) {
  var Composition = sequelize.define('Composition', {
    name: DataTypes.STRING,
    substanceCode: DataTypes.INTEGER,
    substanceName: DataTypes.STRING,
    dosing: DataTypes.STRING,
    refForDosing: DataTypes.STRING,
    nature: DataTypes.STRING,
    activeSubstanceToTherapeuticAction: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Composition.belongsTo(models.Drug, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Composition;
};