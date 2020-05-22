const { check } = require('express-validator');

exports.createUser = [
  check('name')
    .isLength({ min: 1 })
    .withMessage('Name is required'),
  check('email')
    .isEmail().withMessage('Please provide a valid email address'),
  check('password')
    .isLength({ min: 4 })
    .withMessage('Password must be more than 4 characters')
];