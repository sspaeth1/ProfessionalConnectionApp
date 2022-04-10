const express = require('express');
const router = express.Router();

// @route   GET api/score
// @desc    Test
// @access  Public
    router.get('/', (req, res)=>{
        res.send('Got Profile Score');
    })

module.exports = router;