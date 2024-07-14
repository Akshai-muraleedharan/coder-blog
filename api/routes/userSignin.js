const express =require('express')
const userSignin = require('../controller/userSignin.controller')

const router = express.Router()

router.get('/',userSignin)



module.exports = router  