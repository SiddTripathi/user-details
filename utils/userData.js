const request = require('request')



const userNormal = (callback) => {
    const url = 'https://randomuser.me/api/'

    request({ url: url, json: true }, (error, response) => {

        const data = response.body
        if (error) {
            callback('Unable to connect. Check your Internet', undefined)
        } else if (response.body.results.length === 0) {
            callback('Server returned no result', undefined)
        } else {
            callback(undefined, data)
        }

    })
}
const genderUser = (gender, calback) => {
    const url = 'https://randomuser.me/api/?gender=' + gender
    request({ url: url, json: true }, (error, response) => {
        const data = response.body
        if (error) {
            calback('Unable to connect.Check network', undefined)
        } else if (response.body.results.length === 0) {
            calback('Server returned no result', undefined)
        } else {
            calback(undefined, data)

        }
    })


}

const numberOfUsers = (results, calback) => {
    const url = 'https://randomuser.me/api/?results=' + results
    request({ url: url, json: true }, (error, response) => {
        const data = response.body
        if (error) {
            calback('Unable to connect.Check network', undefined)
        } else if (response.body.results.length === 0) {
            calback('Server returned no result', undefined)
        } else {
            calback(undefined, data)

        }
    })


}

module.exports = {
    genderUser: genderUser,
    userNormal: userNormal,
    numberOfUsers: numberOfUsers
}