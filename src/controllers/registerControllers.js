const { check, validationResult } = require('express-validator');
const User = require('../models/User')

const createUser = (req,res) => {
   
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
  }

  exports.createUser = createUser;

