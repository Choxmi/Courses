const request = require('request')

const forecast = (location , callback) => {
    const forecast_url = 'https://api.darksky.net/forecast/ab03b3f688f0ffa29a3fe593f9e6964e/'+location.latitude+','+location.longitude

    request({ url: forecast_url, json: true }, (error, response)=>{
        if(error){
            callback(undefined, 'Error occured')
        } else if(response.body.error) {
            callback(undefined, 'Location Not found')
        } else {
            callback(response.body.daily.data[0].summary, undefined)
        }
    })
}

module.exports = forecast