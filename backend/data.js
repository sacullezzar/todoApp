const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema(
    {
        id: Number,
        todo: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('Data', TodoSchema)