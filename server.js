//Require necessary npm packages

const express = require('express')
const mongoose = require('mongoose')

//Require Route Files
const indexRouter = require('./routes/index')

//Instantiate Express Application Object
const app = express()

//Define PORT for the API to run on
const port = process.env.PORT || 5000; //5000= fallback option, adds flexibility

/**
 * Routes
 * 
 * Mount the imported Routers
 */

app.use(indexRouter)

//Start the server and listen for requests on the given port
app.listen(port, () => console.log(`blogy is listening on port ${port}`))
