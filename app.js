const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();
const path = require('path');
const router = express.Router();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.json());
app.use('/', require('./src/routes/tweetRoutes'))

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect(function(err) {
  if (err) throw err
  console.log("DB connected!")
})

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})

