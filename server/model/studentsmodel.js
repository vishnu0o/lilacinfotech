const mongoose = require('mongoose')
const students = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },

    phonenumber:{
        type:String
        
    },
    secondarynumber:{
        type:String
    },
    images:{
        type:String
    },
    nationality:{
        type:String
    },
    country:{
        type:String
    },
    maritalstatus:{
        type:String
    },
    gender:{
        type:String
    },
    dob:{
        type:String
    }

})
const model = mongoose.model('studentdata',students)
module.exports = model