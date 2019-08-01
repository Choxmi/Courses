console.log('CLS LOADED')

fetch('http://localhost:3000/weather?lat=6.9271&lng=79.8612').then((response) => {
    response.json().then(({forecast = 'Anything is possible', location, error}={})=>{
        console.log(forecast,location,error)
    })
})