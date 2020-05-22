const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers')
const validator = require('../../validator');

router.get('/', (req, res) => {
  res.render('register', { layout: 'login' });
})

router.post('/', validator.createUser, registerControllers.createUser)


module.exports = router 