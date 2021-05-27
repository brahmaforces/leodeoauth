const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send('Welcome to the Leodeo Authentication System.');
});

module.exports = router;