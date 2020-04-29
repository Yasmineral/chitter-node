const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3003;
const router = express.Router();

app.get('/', (req, res) => {
  res.send('login');
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.json());
app.use('/tweet', require('./src/routes/tweetRoutes'))

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})

 