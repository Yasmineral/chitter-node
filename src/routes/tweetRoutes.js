const express = require('express');
const router = express.Router();
const tweetControllers = require('../controllers/tweetControllers')

router.get('/', (req, res) => {
  console.log("Responding to root route")
  res.sendFile('/index.html')
})

router.post('/', (req, res) => {
  console.log(req.body)
});
  

module.exports = router 
