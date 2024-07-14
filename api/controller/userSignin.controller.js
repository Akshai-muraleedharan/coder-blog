const userModel = require('../model/user.model')
const bcryptjs =require('bcryptjs')
const jwt =require('jsonwebtoken');
const errorHandler = require('../utils/error');
 

const userSignin = async (req,res,next) => {
    const {email,password} = req.body;
    try {
        const validUser = await userModel.findOne({email})
        if(!validUser) return next(errorHandler(404,"user not found"))
           const validPassword = bcryptjs.compareSync(password, validUser.password)
           validUser.password =undefined;

            if(!validPassword) return next(errorHandler(401,"invalid credientials"))
            
                const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET)
 
                const expiryDate = new Date(Date.now() + 360000)
                
                res
                .cookie('access token',token,{httpOnly:true,expires:expiryDate})
                .status(200)
                .json(validUser) 

    } catch (error) {
       next(error)  
    } 
}

module.exports =userSignin