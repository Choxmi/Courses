// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL,{ useNewUrlParser: true },(error, client)=>{
    if(error){
        return console.log('Unable to connect')
    }

    // console.log('Connected to DB')
    const db = client.db(databaseName)

///////////WRITE

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Choxmi',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         console.log('Unable to start user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Choxmi',
    //     age: 26
    // },{
    //     name: 'Sathsara',
    //     age: 26
    // }], (error, result) => {
    //     if(error){
    //         console.log('Unable to start user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'task1',
    //     completed: false
    // },{
    //     description: 'task2',
    //     completed: true
    // },{
    //     description: 'task3',
    //     completed: false
    // }], (error, result) => {
    //     if(error){
    //         console.log('Unable to start user')
    //     }

    //     console.log(result.ops)
    // })

///////////// READ

    // db.collection("users").findOne({name: "Choxmi"},(error,users)=>{
    //     if(error)
    //         return console.log('Unable to fetch')

    //     return console.log(users);
    // })

    // db.collection("users").findOne({_id: new ObjectID("5d47fef7d5d0484649f8880a")},(error,users)=>{
    //     if(error)
    //         return console.log('Unable to fetch')

    //     return console.log(users);
    // })

    // db.collection("users").find({age: 26}).toArray((error,users)=>{
    //     if(error)
    //         console.log('Unable to fetch')

    //     console.log(users);
    // })

    // db.collection("users").find({age: 26}).count((error,users)=>{
    //     if(error)
    //         console.log('Unable to fetch')

    //     console.log(users);
    // })

    // db.collection("tasks").find({completed: true}).toArray((error,users)=>{
    //     if(error)
    //         console.log('Unable to fetch')

    //     console.log(users);
    // })

////////////////// Updating with Promises

    // const updatePromise = db.collection("tasks").updateOne({
    //     _id: new ObjectID("5d4965cf932f4d3cb4890b88")
    // },{
    //     $set: {
    //         description: "Updated Description"
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // const updatePromise = db.collection("tasks").updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

/////////////// DELETE

    // db.collection('tasks').deleteMany({
    //     description: "task1"
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "task2"
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})