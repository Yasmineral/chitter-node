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
    .isLength({ min:1 })
    .withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address'),
  check('password1')
    .isLength({ min: 4 })
    .withMessage('Password must be more than 4 characters')
    .custom((value, {req}) => {
      if (value !== req.body.password2) {
        throw new Error('Passwords do not match');
      } else {
        return value
      }
    })    
], (req, res) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors.mapped())
    console.log("errors")
  }
})

module.exports = router 