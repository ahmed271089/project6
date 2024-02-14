const express = require('express')
const router = express.Router()
const TodoModel = require('../models/todoModel')


router.get('/', async (req,res) => {
    try {
        const todosList = await TodoModel.find();


        res.status(200).json({
            msg: 'Todos list fetch successfully',
            todos: todosList
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error server',
            err: error
        })
    }
})


router.post('/', async (req,res) => {
    try {
        const data = req.body;


        const newData = new TodoModel(data)


        await newData.save()


        const todosList = await TodoModel.find();


        res.status(200).json({
            msg: 'new todo added successfully',
            newData: data,
            todos: todosList
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error server',
            err: error
        })
    }
})


router.delete('/:id', async (req,res) => {
    try {
        await TodoModel.findByIdAndDelete(req.params.id)


        const todosList = await TodoModel.find();


        res.status(200).json({
            msg: 'todo deleted Succesfully',
            todos: todosList
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error server',
            err: error
        })
    }
})


router.put('/:id', async (requete,reponse) => {
    try {
        const data = requete.body


        const todosListBefore = await TodoModel.findById(requete.params.id);


        await TodoModel.findByIdAndUpdate(requete.params.id, data)


        const todosListAfter = await TodoModel.findById(requete.params.id);


        reponse.status(200).json({
            msg: 'todo Updated Succesfully',
            todoBefore: todosListBefore,
            todoAfter: todosListAfter,
        })
    } catch (error) {
        reponse.status(500).json({
            msg: 'Error server',
            err: error
        })
    }
})


module.exports = router