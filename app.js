const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db');

const PORT = process.env.PORT || 3003;
const router = express.Router();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', { layout: 'login' });
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.json());
app.use('/tweet', require('./src/routes/tweetRoutes'))

app.listen(PORT, () => {
  console.log("Server is listening on 3003...")
})

db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))