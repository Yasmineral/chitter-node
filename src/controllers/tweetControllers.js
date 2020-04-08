const mysql = require('mysql');
// const dbConnect = require('../../db');

function getConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  })
}

const createTweet = (req, res) => {
    let name = req.body.name.toString()
    let content = req.body.content.toString()

    console.log(name + ' ' + content)

    const queryString = "INSERT INTO tweets (name, tweet) VALUES (?, ?)"
    getConnection().query(queryString, [name, content], (err, results, fields) => {
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