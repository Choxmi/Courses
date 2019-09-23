const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, trim: true},
    email: {type: String, 
            unique: true,
            validate(val){
                if(!validator.isEmail(val)){
                    throw new Error("Invalid email")
                }
    }, trim: true},
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 6,
        lowercase: true,
        validate(val){
            if(val.toLowerCase().includes("password"))
                throw new Error("Password is invalid. 'Password' cannot contain in password")
        }
    },
    age: {type: Number, default: 25, validate(val){
        if (val < 0){
            throw new Error("Age should be a positive value")
        }
    }},
})

userSchema.pre('save',async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

userSchema.statics.findByCredentials = async (email,password) => {
    console.log("In Credentials")
    const user = await User.findOne({email})
    console.log(user)
    if(!user)
        throw new Error('Unable to login')
    
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch)
        throw new Error('Unable to login')
    console.log("Returning")
    return user
}

const User = mongoose.model('user',userSchema)

// const me = new User({
//     name: 'Choxmi',
//     email: 'gwcsathsara@gmail.com',
//     password: 'dsfdfsfd'
// })

// me.save().then((result)=>{
//     console.log(me + ' Should Be Same '+result)
// }).catch((error) => {
//     console.log('Error occured '+error)
// })

module.exports = User