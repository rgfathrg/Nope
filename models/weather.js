module.exports = function(sequelize, DataTypes) {
    var Weather = sequelize.define("Weather", {
      location: DataTypes.STRING,
      currentTemp: DataTypes.STRING
    });
    return Weather;
  };
  
  
  module.Weather;
  