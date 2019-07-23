const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if(process.argv[2]){
    geocode(process.argv[2],(data,error) => {
        if(error)
            console.log(error)

        if(data !== undefined){
            forecast(data,(forecast,err) => {
                if(error)
                console.log(error)

                console.log(data.location)
                console.log(forecast)
            })
        }
    })
} else {
    console.log("Provide Proper Location")
}