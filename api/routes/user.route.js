const express = require('express');
const userSignup = require('../controller/user.controller');



router = express.Router();

 router.post('/',userSignup)


 module.exports = router