const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes/routes.js");
const cors = require('cors');
const connectDB = require('./data/data.js');

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
}));

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(router);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

module.exports = app;
