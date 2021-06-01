const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia2F0bGVuZWphbmUiLCJhIjoiY2twN3k0bm9jMDQ2azJ4bXNiNnV5eWl6MiJ9.b5Qt0tRa7KDfu1Yn_o7C7g&limit=1";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location sevices!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find the location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
