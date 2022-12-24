const router = require('express').Router()
const Check = require('../models/Check')


// GET ALL USER
router.get('/check', async (req, res) => {
    try {
        const check = await Check.find();
        res.status(200).json({
            check,
        });
    } catch {
        res.status(500).json({
            message: "Authentication failed!!",
        });
    }
});


module.exports = router;