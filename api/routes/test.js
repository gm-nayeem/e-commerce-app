const router = require('express').Router()
const Test = require('../models/Test')


// GET ALL USER
router.get('/check', async (req, res) => {

    const saveData = new Test({
        username: 'kabbo',
        userId: "393454"
    });

    try {
        const data = await saveData.save();
        console.log(data);

        const test = await Test.find();
        res.status(200).json(test);
    } catch(err) {
        res.status(500).json({
            err: err.message
        });
    }

});


module.exports = router;