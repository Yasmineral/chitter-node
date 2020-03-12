const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', require('./routes/home'))

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})

