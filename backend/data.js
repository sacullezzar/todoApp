const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema(
    {
        id: String,
        todo_body: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('todo', TodoSchema)