const path = require('path');
const sqlite3 = require('sqlite3').verbose();
// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')
// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  })
// Create a table in the database called "user"
knex.schema
  // Make sure no "users" table exists
  // before trying to create new
  .hasTable('users')
    .then((exists) => {
      if (!exists) {
        // If no "users" table exists
        // create new
        // and use "id" as a primary identification
        // and increment "id" with every new record (user)
       
        return knex.schema.createTable('users', (table)  => {
          table.increments('id').primary()
          
          table.string('firstname')
          table.string('surname')
          table.string('email')
          table.integer('telephone')
          table.string('gender')
          table.integer('date')
          table.integer('month')
          table.integer('year')
          table.string('comment')
        })
        .then(() => {
          // Log success message
          console.log('Table \'User\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "users" table
knex.select('*').from('users')
  .then(data => console.log())
  .catch(err => console.log(err))

// Export the database
module.exports = knex