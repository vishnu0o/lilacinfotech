const userModel = require('../model/usermodel')
const bcrypt = require('bcrypt')
const auth = require('../Middleware/auth')

//// user Registration ////

const Register = async (req, res) => {
    try {
        console.log("server vannu")
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }


}

module.exports={
    Register
}