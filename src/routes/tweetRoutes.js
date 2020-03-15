const express = require('express');
const router = express.Router();
const tweetControllers = require('../controllers/tweetControllers')

router.get('/', (req, res) => {
  console.log("Responding to root route")
  res.sendFile('/index.html')
})

router.post('/', (req, res) => {
  const tweet = {
    name: req.body.name.toString(),
    content: req.body.content.toString()
  };

  console.log(tweet)
});
  

module.exports = router 
