// external import
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// internal import 
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
//const stripeRoute = require('./routes/stripe')

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())

// body-parser
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/carts", cartRoute)
// app.use("/api/checkout", stripeRoute)


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

