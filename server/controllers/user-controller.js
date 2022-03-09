// Import database
const knex = require('./../db')

// Retrieve all users
exports.usersAll = async (req, res) => {
  // Get all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new user
exports.usersCreate = async (req, res) => {
  // Add new user to database
  knex('users')
    .insert({ // insert new record, a user
      'firstname': req.body.firstname,
      'surname': req.body.surname,
      'email': req.body.email,
      'telephone': req.body.telephone,
      'gender': req.body.gender,
      'date': req.body.date,
      'month': req.body.month,
      'year': req.body.year,
      'comment': req.body.comment
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `user created.` })
    })
    .catch(err => {
      console.log(err)
      // Send a error message in response
      res.json({ message: `There was an error creating user: ${err}` })
    })
}

