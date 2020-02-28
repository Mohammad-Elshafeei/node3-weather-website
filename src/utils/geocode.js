const request = require("request");

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/'" + encodeURIComponent(address) + "'.json?access_token=pk.eyJ1IjoibW9lbHNoYWZlZWk5OCIsImEiOiJjazV0ajI4b20wd2ZiM25wYmM4aGkzcjZsIn0.j8bKtKKvm_NzJKKHZkJMWw&limit=1"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (body.features.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}

// geocode("Cairo", (error, data) => {
//     console.log("Error: ", error);
//     console.log("Latitude: " + data.latitude);
//     console.log("Longitude: " + data.longitude);
//     console.log("Location: " + data.location);
//     console.log("Data: ", data);
// });

module.exports = geocode;