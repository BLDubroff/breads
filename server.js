// DEPENDENCIES
const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Welcome to an Awesome App about Breads!</h1>')
})

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})


