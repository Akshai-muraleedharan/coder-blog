const userModel =require('../model/user.model')
const bcryptjs =require('bcryptjs')
const errorHandler = require('../utils/error');

const userSignup = async (req,res,next) => {
    const {username,email,password} = req.body
    const hasedPassword =bcryptjs.hashSync(password,10)
    const newUser = new userModel({username,email,password:hasedPassword})


    try {
        await newUser.save()
        if(!newUser) return next(errorHandler(404,"invalid data"))
        res.status(201).json(newUser)
    } catch (err) {
        next()
    }
}

module.exports = userSignup;