const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//Create User
router.post('/user',async (req,res)=>{
    console.log(req.body)
    const user = new User(req.body)

    //Async Await
    try{
        await user.save()
        res.status(201).send()
    } catch(e){
        res.status(400).send(e)
    }

    //Using Promise chaining

    // user.save().then((result)=>{
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

//Fetch all users
router.get('/users',async (req,res)=>{
    try{
        const user = await User.find()
        res.status(201).send(user)
    } catch(e){
        res.status(400).send(e)
    }

    // User.find().then((users)=>{
    //     res.status(200).send(users)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
})

//Get Specific User
router.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    // User.findOne({_id: id}).then((users)=>{
    //     res.status(200).send(users)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })

    User.findById(id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }

        res.status(200).send(user)
    }).catch((error)=>{
        res.status(500).send(error)
    })
})

//Update a user
router.patch('/user/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','age','email','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({
            "error": "Invalid parameters"
        })
    }

    const _id = req.params.id
    try{
        const user = await User.findById(req.params.id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        })

        await user.save()

        // const user = await User.findByIdAndUpdate(_id,req.body,{ new : true, runValidators: true})

        if(!user)
            return res.status(404).send()

        res.status(200).send(user)
    } catch(e){
        res.status(500).send(e)
    }
})

//Delete a User
router.delete('/user/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch(e){
        res.status(500).send(e)
    }
})

router.post('/user/login', async (req,res) => {
    try {
        console.log(req.body)
        const user = await User.findByCredentials(req.body.email, req.body.password)
        console.log("User : "+user)
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router