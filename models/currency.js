module.exports = function(sequelize, DataTypes) {
  var Currencies = sequelize.define("Currencies", {
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pair: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: true
    }
  });
  return Currencies;
};
