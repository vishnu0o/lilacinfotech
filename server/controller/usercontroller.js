const userModel = require('../model/usermodel')
const bcrypt = require('bcrypt')
const auth = require('../Middleware/auth')


//// user Registration ////

const Register = async (req, res) => {
    try {
        const {name,email,password} = req.body
        const user = await userModel.find({ email:email })
        if (user.length == 0) {
            passbycrpt = await bcrypt.hash(password, 10)
            userModel.create({
                name: name,
                email:email,
                password: passbycrpt,
            })
            res.json({ status: true})
        }
        else {
            return res.json({ error: 'Email is already exist' })
        }
        
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }

}

const login = async (req, res) => {

    try {

        let {email,password} = req.body
        console.log(email)
        const finduser = await userModel.findOne({ email:email })
        console.log(finduser.password,'_+_+_+')
        if (finduser) {
            const matchpasswd =await bcrypt.compare(password, finduser.password)
            if (matchpasswd == true) {
                const token = auth.generatetoken(finduser)
                res.json({ status: true, user: token, username: finduser.name, userdetails: finduser})
            }
            else {
                res.json({ status: false, error: 'password' })
            }
        } else {
            res.json({ status: false, error: 'email' })
        }

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }

}


module.exports={
    Register,
    login
}