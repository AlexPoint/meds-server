'use strict';
module.exports = function(sequelize, DataTypes) {
  var Drug = sequelize.define('Drug', {
    cis: DataTypes.INTEGER,
    name: DataTypes.STRING,
    form: DataTypes.STRING,
    adminRoute: DataTypes.STRING,
    authStatus: DataTypes.STRING,
    authType: DataTypes.STRING,
    authDate: DataTypes.DATE,
    marketState: DataTypes.STRING,
    status: DataTypes.STRING,
    euroAuthNb: DataTypes.STRING,
    owner: DataTypes.STRING,
    enforcedMonitoring: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Drug.hasMany(models.Composition);
        Drug.hasMany(models.Presentation);
      }
    }
  });
  return Drug;
};