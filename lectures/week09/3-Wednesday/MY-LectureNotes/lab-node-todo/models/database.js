const pgp = require('pg-promise')();

let connectionString ={

    host: 'localhost', 
    port: 5432, 
    database: 'todolist', 
    user: 'postgres',
    password: 'DTBase101'
}

const db = pgp(connectionString)

module.exports = db