//Require necessary npm packages
const express = require('express')

// Require Mongoose Model for Article
const Article = require('../models/article')

//Instantiate a Router (a mini app that only handles routes)
const router = express.Router()

/**
 * Action: INDEX
 * Method: GET
 * URI: /api/articles
 * Description: Get All Articles
 * 
 */

/**
 * Action: SHOW
 * Method: GET
 * URI: /api/articles/id_number
 * Description: Get a Article by Article ID
 */

router.get('/api/articles', (req, res) => {
    Article.find()
    //Return all Articles as an array
    .then((allArticles) => {
        res.json({articles: allArticles})
    })
    //Catch any errors that might occur
    .catch(error => {
        res.status(500).json({error: error})
    })
})

/**
 * Action: DESTROY
 * Method: DELETE
 * URI: /api/articles/id_number
 * Description: Delete a Article by Article ID
 */

/**
 * Action: UPDATE
 * Method: PUT/PATCH
 * URI: /api/articles/id_number
 * Description: Update a Article by Article ID
 */

/**
 * Action: CREATE
 * Method: POST
 * URI: /api/articles
 * Description: Create a new Article
 */

//Export the Router so we can use it in the `server.js` file
module.exports = router

