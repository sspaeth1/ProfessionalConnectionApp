const express = require('express');
const router = express.Router();

// @route   GET api/artentries
// @desc    Test
// @access  Public
    router.get('/', (req, res)=>{
        res.send('Got artentries Route');
    })

module.exports = router;