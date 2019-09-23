const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

//Create Tasks
router.post('/task',(req,res)=>{
    const task = new Task(req.body)

    task.save().then((result)=>{
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Fetch all tasks
router.get('/tasks',(req,res)=>{
    Task.find().then((tasks)=>{
        res.status(200).send(tasks)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

//Get Specific Task
router.get('/task/:id',(req,res)=>{
    const id = req.params.id;
    console.log(req.params)
    Task.findById(id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }

        res.status(200).send(task)
    }).catch((error)=>{
        res.status(500).send(error)
    })
})

//Update tasks
router.patch('/task/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({
            "error": "Invalid parameters"
        })
    }

    const _id = req.params.id
    try{

        const task = await Task.findById(req.params.id)

        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        await task.save()
        
        // const task = await Task.findByIdAndUpdate(_id,req.body,{ new : true, runValidators: true})
        
        if(!task)
            return res.status(404).send()

        res.status(200).send(task)
    } catch(e){
        res.status(500).send(e)
    }
})

//Delete Task
router.delete('/task/:id',async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router