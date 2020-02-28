const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/d48d491d4011b248378efd65fe8ec483/" + latitude + "," + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined,
                body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out." + " There is a " + body.currently.precipProbability + "% chance of rain."
            );
        }
    });
}

// forecast(44.1545, -75.7088, (error, data) => {
//     console.log("Error: ", error);
//     console.log("Data: ", data);
// });

module.exports = forecast;