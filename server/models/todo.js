const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Todo = new Schema({
    todo_body: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
})

module.exports = mongoose.model('Todo', Todo)