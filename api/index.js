// external import
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// internal import 


const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes



app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our E-commerce application"
    })
});


// port and database connection
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server in running at http://localhost:${PORT}`);
    mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true },
        () => {
            console.log('Database Connected Successfully...');
        }
    );
})

