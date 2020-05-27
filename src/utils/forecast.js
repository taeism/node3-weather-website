const request = require('postman-request')
const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52885a11ff987bd67bcdefc6f76c21fa&query=' + lat + ',' + lon + '&units=f'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Incorrect coordinate format', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast