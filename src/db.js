const {Pool, Client} = require('pg'); // client is single connection to postgres server. pool is dynamic connection with reconnect
// enable .env
const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env')
});
// use .env 
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});
// connect to pg client
(async () => {
    const client = await pool.connect();
})
