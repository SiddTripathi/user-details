const path = require('path')
const express = require('express')
const hbs = require('hbs')

const user = require('../utils/userData')
const normalUser = user.userNormal
const genderUser = user.genderUser
const numberOfUsers = user.numberOfUsers


const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath);

app.get('/user', (req, res) => {
    if (!req.query.gender && !req.query.results) {
        normalUser((error, data) => {
            if (error) {
                console.log('error', error)
            }

            console.log('data', data)
            console.log('The name is ', data.results[0].name.first)
            res.send(data)

        })
    } else if (req.query.results > 0) {
        console.log(req.query.results)
        numberOfUsers(req.query.results, (error, data) => {
            if (error) {
                console.log('error', error)
            }
            console.log('data', data)
            res.send(data)
        })
    } else {
        genderUser(req.query.gender, (error, data) => {
            if (error) {
                console.log('error', error)
            }

            console.log('data', data)
            res.send(data)
        })
    }
})



app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})