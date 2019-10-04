const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt');

var userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    googleId:{
        type:String,
        required:true
    },
    firstName:{
        type:String
    }
    ,lastName:{
        type:String
    },
    image:{
        type:String
    }
})

// userSchema.methods.encryptPassword = function(){
//     const saltRounds = 10;
//     return new Promise((resolve,reject)=>{
//         bcrypt.genSalt(saltRounds, (err, salt) =>{
//             bcrypt.hash(this.password, salt, (err, hash) => {
//                 this.password = hash
//                 resolve(true)
//             });
//         });
//     })
// }

// userSchema.methods.verifyPassword = function(password){
//     return new Promise((resolve,reject)=>{
//         bcrypt.compare(password,this.password,(err,isMatch)=>{
//             if(err) throw err;
//             if(isMatch) resolve(true)
//             else reject(false)
//         })
//     })
// }

mongoose.model('users',userSchema)