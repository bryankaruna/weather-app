const request = require('request');

const geocode = (address, callback) => {
    //mapbox API
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURI(address) +'.json?access_token=pk.eyJ1IjoiYnJ5YW5rYXJ1bmEiLCJhIjoiY2p5ZmJwNHZ5MDk0YTNtbXlkODVqMmx0YiJ9.GLc-m3eNhc8LRCMtiCsESQ&limit=1';
    
    request({url: mapboxUrl, json: true}, (error, {body}) => {
        if(error){
            //low level error 
            callback(body.error, undefined);
        }else if(body.features.length === 0){
            //no match
            callback('No location matched', undefined);
        }else{
            //success
            callback(undefined, {
                lon: body.features[0].center[0],
                lat: body.features[0].center[1],
                place: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;
