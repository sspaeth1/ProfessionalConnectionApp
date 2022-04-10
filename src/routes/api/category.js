const express = require('express');
const router = express.Router();

// @route   GET api/categories
// @desc    Test
// @access  Public
    router.get('/', (req, res)=>{
        res.send('Got categories Route');
    })

module.exports = router;