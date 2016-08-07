'use strict';
module.exports = function(sequelize, DataTypes) {
  var Presentation = sequelize.define('Presentation', {
    name: DataTypes.STRING,
    cip7: DataTypes.INTEGER,
    status: DataTypes.STRING,
    marketState: DataTypes.STRING,
    authDate: DataTypes.DATE,
    cip13: DataTypes.STRING,
    publicAgreement: DataTypes.BOOLEAN,
    reimbursementRate: DataTypes.FLOAT,
    priceWithoutDistributor: DataTypes.FLOAT,
    distributorPrice: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Presentation.belongsTo(models.Drug, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Presentation;
};