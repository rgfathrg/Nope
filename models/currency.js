module.exports = function(sequelize, DataTypes) {
  var Currencies = sequelize.define("Currencies", {
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pair: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rate: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    }
  });
  return Currencies;
};
