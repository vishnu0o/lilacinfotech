const express = require('express')
const auth = require('../Middleware/auth')
const usercontroller = require('../controller/usercontroller')
const router = express.Router()
router.post('/signup',usercontroller.Register)
router.post('/login',usercontroller.login)



module.exports =  router
