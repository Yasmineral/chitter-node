// const Tweet = require('../models/tweet');


const createTweet = (req, res) => {
    let name = req.body.name.toString()
    let content = req.body.content.toString()

    const queryString = "INSERT INTO tweets (name, tweet) VALUES (?, ?)"
    connection.query(queryString, [name, content], (err, results, fields) => {
      if (err) {
        console.log("Failed to save tweet")
        res.sendStatus(500)
        return
      }

      console.log("Tweet saved!")
      res.end()
    })
}

  exports.createTweet = createTweet;