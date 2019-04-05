const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 14000

app.use(cors())
app.use(bodyParser.json())
app.use('./todos', require('./routes/routes'))

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds231956.mlab.com:31956/todo`, {
    useNewUrlParser: true 
})
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB connected to Database!")
})

app.listen(PORT, () => {
    console.log(`Db server running on Port: ${PORT}`)
})