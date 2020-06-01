const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3003;
const router = express.Router();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.json());
app.use(bodyParser.urlencoded( {extended: false }));
app.use('/tweet', require('./src/routes/tweetRoutes'))
app.use('/register', require('./src/routes/registerRoutes'))
app.use('/home', require('./src/routes/homeRoutes'))
app.use('/login', require('./src/routes/loginRoutes'))
app.get('/', (req, res) => {
  res.render('register', { layout: 'login' });
})

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})
