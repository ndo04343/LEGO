const Users = require("../models").Users
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const {email, password} = req.body
    
    const user = await Users.findOne({
        where : {
            email:email
        }
    })

    if (user) {
        bcrypt.compare(password, user.dataValues.password, (error, same) => {
            if (same) {
                req.session.email = user.dataValues.email
                res.redirect('/games')
            } else {
                res.redirect('/')
            }
        })
    } else {
        res.redirect('/')
    }
}