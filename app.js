const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();
const path = require('path');
const router = express.Router();
require('dotenv').config();

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('login');
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.json());
app.use('/tweet', require('./src/routes/tweetRoutes'))

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})

