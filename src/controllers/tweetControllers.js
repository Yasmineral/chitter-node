const mysql = require('mysql');
const db = require('../../db.js');

const createTweet = (req, res) => {
    let name = req.body.name.toString()
    let content = req.body.content.toString()

    console.log(name + ' ' + content)

    const queryString = "INSERT INTO tweets (name, tweet) VALUES (?, ?)"
    db.dbConnect().query(queryString, [name, content], (err, results, fields) => {
      if (err) {
          console.log("Failed to save tweet" + err)
          res.sendStatus(500)
          return
      }

      console.log("Tweet saved!");
      res.end()
    })
}

  exports.createTweet = createTweet;