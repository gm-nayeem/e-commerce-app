const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    const encrypted = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

    const newUser = new User({
        username,
        email,
        password: encrypted
    });

    try {
        const savedUser = await newUser.save();
        // console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {

    const {
        username,
        password
    } = req.body

    // console.log(username, password);

    try {
        const user = await User.findOne({username});

        if(!user) return res.status(401).json("Wrong User Name");

        const decrypted = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = decrypted.toString(CryptoJS.enc.Utf8);

        if(originalPassword != password) 
            return res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        //const { password, ...others } = user._doc;
        res.status(200).json({ user, accessToken });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;