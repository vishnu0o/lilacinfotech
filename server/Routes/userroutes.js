const express = require('express')
const auth = require('../Middleware/auth')
const usercontroller = require('../controller/usercontroller')
const router = express.Router()
router.post('/signup',usercontroller.Register)



module.exports =  router
