const express = require('express')
const auth = require('../Middleware/auth')
const usercontroller = require('../controller/usercontroller')
const {upload} = require('../Middleware/multer')

const router = express.Router()
router.post('/signup',usercontroller.Register)
router.post('/login',usercontroller.login)
router.post('/addstudent',upload.fields([{ name: 'image', maxCount: 1 }]),usercontroller.addstudent)
router.get('/liststudents',usercontroller.listuser)



module.exports =  router
