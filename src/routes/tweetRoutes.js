const express = require('express');
const router = express.Router();
const tweetControllers = require('../controllers/tweetControllers')
const Tweet = require('../models/Tweet')

router.get('/', (req, res) => {
  console.log("Responding to tweet route")
  res.render('tweet')
  Tweet.findAll()
    .then(tweets => {
      console.log('responding')
    })
    .catch(err => console.log(err))
})

router.get('/test', (req, res) => {
  res.render('home')
})

router.post('/', tweetControllers.createTweet)

module.exports = router 
