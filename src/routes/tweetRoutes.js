const express = require('express');
const router = express.Router();
const tweetControllers = require('../controllers/tweetControllers')

router.get('/', (req, res) => {
  res.render('tweet')
})

router.post('/', tweetControllers.createTweet)

module.exports = router 
