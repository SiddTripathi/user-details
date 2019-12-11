const request = require('request')
const user = require('../utils/userData')



user((error, data) => {
    if (error) {
        console.log('error', error)
    }

    console.log('data', data)
    console.log('The name is ', data[0].name.first)

})


// const url = 'https://randomuser.me/api/?results=10'

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect. Fetching data from database')
//     } else {
//         console.log(response.body.results.length)
//     }
// })