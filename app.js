const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const productRoutes = require("./api/routes/product");

dotenv.config();

// connect to db 
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log('Connect to db')
)

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(4000, () => {
    console.log(`Listening to the port:`);
})