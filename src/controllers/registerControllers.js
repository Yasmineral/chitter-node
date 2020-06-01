const { check, validationResult } = require('express-validator');
const models = require('../../database/models')

const createUser = (req, res) => {
   
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
      models.User.create({
        name: name,
        email: email,
        password: password
      })
      .then(user => res.redirect('/home'))
      .catch(err => console.log(err))
    }
  }

  exports.createUser = createUser;

