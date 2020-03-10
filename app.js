const express = require('express');
const port = 3003;
const app = express();
const path = require('path');
const router = express.Router();


app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.sendFile(__dirname+'/index.html')
})

app.get('/public/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
})
// localhost:3003
app.listen(port, () => {
  console.log("Server is listening on 3003...")
})



