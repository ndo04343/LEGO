const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        User.create({
            email: req.body.email,
            age: req.body.age,
            sex: req.body.sex,
            password: hash,
        }, (error) => {
            if (error) {
                return res.redirect('/signup')
            }
        })
        
        res.redirect('/')
    })
}
