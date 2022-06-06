"use strict";

const express = require("express");
const app = express();

// Server Static Files
app.use(express.static('static'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
