const {Pool, Client} = require('pg'); // client is single connection to postgres server. pool is dynamic connection with reconnect
// enable .env
const path = require('path');

// make sure we can env from the right dir
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '../.env')
});
// login to postgres
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

// connect to postgres
(async () => {
    try {
        // create client
        const client = await pool.connect();
        console.log("Connected to postgres");
    }
    // error check
    catch (err) {
        console.error(err.message);
    }
})();

// create db
async function createDb() {
    try {
        const client = await pool.connect();
        console.log("Connected to postgres");
    }
    catch (err) {
        console.error(err.message);
    }
}



