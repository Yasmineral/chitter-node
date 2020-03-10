const express = require('express');
const port = 3003;
const app = express();
const path = require('path');
const router = express.Router();


app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.sendFile(path.join(__dirname+'/index.html'))
})

// localhost:3003
app.listen(port, () => {
  console.log("Server is listening on 3003...")
})



