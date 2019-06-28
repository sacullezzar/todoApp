require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const todo = require('./Data')
const cors = require('cors')
const API_PORT = 3030
const app = express()

const dbRoute = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds231956.mlab.com:31956/${process.env.DB_NAME}`

mongoose.connect(dbRoute, { useNewUrlParser: true })
    
let db = mongoose.connection

db.once('open', () => console.log('connected to mlab!'))
db.on('error', console.error.bind(console, 'Mlab connection error!'))
    
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"))

app.post('/updateTodo', (req, res) => {
    const { id, update } = req.body
    todo.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err})
        return res.json({ success: true })
    })
})

app.post('/todo/complete', (req, res) => {
    todo.findByIdAndDelete(req.body.params.todoId, (err, todo) => {
        if (err) return res.send(err)
        const response = {
            message: "Todo completed",
            id: todo._id
        }
        return res.status(200).send(response)
    })
})

app.post('/todo/new', (req, res) => {
    todo.create({
        body: req.body.todoBody,
        id: req.body.todoId
    })
        .then(() => {
            res.sendStatus(200)
        })
})

app.get('/todo/all', (req, res) => {
    todo.find((err, todos) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(todos)
    })
})

app.listen(API_PORT, () => console.log(`Backend running on ${API_PORT}`))