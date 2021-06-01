const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=354de687a2fa7af2626127ffa1d12af0&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (response.body.error) {
      callback("Unabled to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out. It feels like " +
          response.body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
