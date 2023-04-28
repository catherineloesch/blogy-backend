//Define the database for the development environment
const localDB = 'mongodb://localhost:27017/blogy'

// Environment variable MOGODB_URI will be available
// Heroku production environment otherwise use the development database
const currentDB = process.env.MONGODB_URI || localDB

//Export the appropriate databse based on the current environment
module.exports = currentDB