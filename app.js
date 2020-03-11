const express = require('express');
const port = 3003;
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.sendFile(__dirname+'/public/client/index.html')
})

app.listen(port, () => {
  console.log("Server is listening on 3003...")
})



