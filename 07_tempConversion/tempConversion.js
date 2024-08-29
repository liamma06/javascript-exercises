const convertToCelsius = function(fahren) {
  let celsiusResult = Math.round(((fahren - 32) * 5/9)*10) / 10;
  return celsiusResult;
};

const convertToFahrenheit = function(celsius) {
  let fahrenResult = Math.round((celsius*9/5 + 32)*10) / 10;
  return fahrenResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
