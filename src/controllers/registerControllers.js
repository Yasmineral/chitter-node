const { check, validationResult } = require('express-validator');
const User = require('../models/User')

const createUser = (req,res) => {
   
    let errors = validationResult(req)
    let { name, email, password } = req.body
    if (!errors.isEmpty()) {
      console.log(errors.mapped())
      res.render('register', {
        errors,
        name,
        email
      })
    } else {
      User.create({
        user_name: name,
        user_email: email,
        user_pass: password
      })
      .then(user => res.redirect('/home'))
      .catch(err => console.log(err))
    }
  }

  exports.createUser = createUser;

