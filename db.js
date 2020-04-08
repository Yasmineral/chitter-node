const mysql = require('mysql');

const dbConnect = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  })
}


// function connectDB() {
//   connection.connect(function(err) {
//   if (err) throw err
//     console.log("DB connected!")
//   })
// }

exports.dbConnect = dbConnect;