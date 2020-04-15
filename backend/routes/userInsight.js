let express = require('express');
let router = express.Router();
let db = require('../db/models/index');
const { getInsights } = require('./routeHelpers/watson-insights')

//Get user insights
router.get("/", (req, res) => {

let arr = req.body

let goals = [];

arr.forEach(goalObj => {

  let formattedParam = {
    "content": goalObj.answer,
    "contenttype": "text/plain",
    "created": goalObj.createdAt,
    "id": "666073008692314113",
    "language": "en"
  };
  goals.push(formattedParam)
})

  // Set parameters for API call, using imported sampleData object (from ./sampleData) as content parameter
  let params = {
    content: goals,
    content_type: 'text/plain',
    raw_scores: true,
    consumption_preferences: true
  };




});