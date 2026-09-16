const express = require('express');
const router =  require("../src/routes/boards.js")

const app = express()

app.use("/api/v1/boards", router)

module.exports = app