const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { findOne } = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')

const User = require('../../models/User');

// @route   POST api/user
// @desc    Register User
// @access  Public
router.post('/',
    [
            check('name','Name is required').not().isEmpty(),
            check('email', 'Please include an email').isEmail(),
            check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
    ],
    async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const { name, email, password} = req.body;
        try{
        // Check is user exists
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({errors:[{msg:"User already exists"}]})
        }
        // Get user gravatar
        const avatar =  gravatar.url(email,
            {
                s:'200',
                r:'pg',
                d:'mm'
            })

        user = new User(
            {
                name,
                email,
                avatar,
                password
            }
        )
        //Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        //return jsonWebToken
        const payload =
            {
                user:{
                    id: user.id
                }
            }
        jwt.sign(
            payload,
            "SUPER_SECRET_TEMP_PASSWRD",//config.has("jwtSecret"),
            {expiresIn: 3600000},
            (err, token)=>{
                if(err)throw err;
                res.json({token});
            } )

        // console.log(req.body);
        // res.send('User Registered')

        }catch(err){
            console.error(err);
            res.status(500).send('Server Error');
        }
});

module.exports = router;