const express = require('express')
const todoRoutes = express.Router()

let Todo = require('../models/todo')

todoRoutes.use((req, res, next) => {
    next()
})

todoRoutes.route('/').get((req, res) => {
    Todo.find((err, todos) => {
        let data
        if(err) {
            console.log(err.message)
        } else {
            data = res.json(todos)
        }
        return data
    })
})

todoRoutes.route('/:id').get((req, res) => {
    let id = req.params.id
    Todo.findById(id, (err, todo) => {
        if(err) {
            console.log(err.message)
        } else {
            res.json(todo)
        }
    })
})

todoRoutes.route('/add').post((req, res) => {
    console.log('adding', req)
    let todo = new Todo(req.body)
    todo.save()
        .then(todo => {
            res.status(200).json({todo: 'todo added'})
        })
        .catch(err => {
            res.status(400).send('Ooops, todo failed!')
        })
})

todoRoutes.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if(!todo) {
            res.status(404).send('data not found!')
        } else {
            todo.todo_body = req.body.todo_body
            todo.todo_completed = req.body.todo_completed
            todo.save().then(todo => {
                res.json('Todo updated!')
            })
            .catch(err => {
                res.status(400).send('Update failed!')
            })
        }
    })
})

module.exports = todoRoutes