const express = require('express');
const router = express.Router();
const {register,login,signout,updatePassword}=require('../controllers/userController')
const {auth}=require('../middlewares/auth')


router.post('/register', register)
 router.post('/login',login)
 router.post('/update/:id',updatePassword)
 
 router.get('/signout',signout)







module.exports= router;