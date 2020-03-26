// const Tweet = require('../models/tweet');

const createTweet = (req, res) => {
  const tweet = {
    name: req.body.name.toString(),
    content: req.body.content.toString()
  };

  console.log(tweet)
}

  exports.createTweet = createTweet;