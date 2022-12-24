const router = require('express').Router()
const Check = require('../models/Check')


// GET ALL USER
router.get('/check', async (req, res) => {

    const saveData = new Check({
        username: 'avik',
        userId: "393"
    })

    try {
        await saveData.save()
        // res.status(200).json({
        //     test,
        // });

        const test = await Check.find();
        res.status(200).json(test);
    } catch {
        res.status(500).json({
            message: "Authentication failed!!",
        });
    }
});


module.exports = router;