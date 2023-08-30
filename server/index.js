const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/usermodel')
const userRoute = require('./Routes/userroutes')

app.use(cors())
app.use(express.json())
app.use(express.static('public'));


app.use('/',userRoute)

mongoose.connect('mongodb://127.0.0.1:27017/testuser')
app.listen(3000,()=>{
    console.log('server started')
})