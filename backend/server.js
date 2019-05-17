require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const todo = require('./Data')
const API_PORT = 3030
const app = express()
app.use(cors())
const router = express.Router()

const dbRoute = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds231956.mlab.com:31956/${process.env.DB_NAME}`

mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
)

let db = mongoose.connection

db.once('open', () => console.log('connected to mlab!'))
db.on('error', console.error.bind(console, 'Mlab connection error!'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"))

router.get('/getTodos', (req, res) => {
    todo.find({})
        .then(eachTodo => {
            res.json(eachTodo)
        })
})

router.post('/updateTodo', (req, res) => {
    const { id, update } = req.body
    todo.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err})
        return res.json({ success: true })
    })
})

router.delete('/deleteTodo', (req, res) => {
    const { id } = req.body
    todo.findOneAndDelete(id, err => {
        if (err) return res.send(err)
        return res.json({ success: true })
    })
})

router.post('/addTodo', (req, res) => {
    const { body } = req.body
    todo.create({
        body: body
    })
        .then(todo => {
            res.json(todo)
        })
})

app.use('/api', router)
app.listen(API_PORT, () => console.log(`Backend running on ${API_PORT}`))