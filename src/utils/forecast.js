const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/dba3cb3884ff1f6ceb49b27b610ee7ad/'+ lat +','+ lon +'?lang=en&units=si';
    
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('something went wrong', undefined);
        }else if(body.error){
            callback(body.error, undefined);
        }else{
            callback(undefined, {
                summary: body.currently.summary,
                rain: body.currently.precipProbability,
                temperature: body.hourly.data[0].temperature
            });
        }
    });
}

module.exports = forecast;

