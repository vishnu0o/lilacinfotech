const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/usermodel')
const userRoute = require('./Routes/userroutes')

app.use(cors())
app.use(express.json())
app.use(express.static('public'));
const env = require('dotenv').config();


app.use('/',userRoute)

mongoose.connect(process.env.url)
app.listen(process.env.port,()=>{
    console.log('server started')
})