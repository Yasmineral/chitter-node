const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.render('register', { layout: 'login' });
})

router.post('/', [
  check('name')
    .isLength({ min: 1 })
    .withMessage('Name is required'),
  check('email')
    .isEmail().withMessage('Please provide a valid email address'),
  check('password')
    .isLength({ min: 4 })
    .withMessage('Password must be more than 4 characters')
], (req, res) => {
  let errors = validationResult(req)
  let { name, email } = req.body
  if (!errors.isEmpty()) {
    console.log(errors.mapped())
    res.render('register', {
      errors,
      name,
      email
    })
  } else {
    console.log('Send to database')
  }
})

module.exports = router 