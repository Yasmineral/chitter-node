const express = require('express');
const router = express.Router();
const tweetControllers = require('../controllers/tweetControllers')

router.get('/', (req, res) => {
  console.log("Responding to tweet route")
  res.sendFile("/Users/yaskemp/Desktop/Projects/Post-Makers/chitter-node/public/index.html")
})

router.post('/', tweetControllers.createTweet)

module.exports = router 
