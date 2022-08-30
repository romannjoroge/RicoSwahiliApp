const dotenv = require('dotenv')
const pg = require('pg')
dotenv.config()
const Pool = pg.Pool
const pool = new Pool({
    user: process.env.DATABASEUSER,
    database: process.env.DATABASE,
    port: process.env.PORT,
    password: process.env.PASSWORD
})

module.exports = pool