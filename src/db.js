import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import pkg from 'pg';
const { Pool, Client } = pkg;

// Determine the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({
    override: true,
    path: join(__dirname, '../.env')
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
        const query = {
            name: 'create-notesdb-table',
            text: ' Create table notesDB (id serial PRIMARY KEY, created_at timestamp default current_timestamp, note_text VARCHAR(100));'
        }
        client.query(query);
    }
    catch (err) {
        console.error(err.message);
    }
}

// export pool so dont need to reinstate it every file
export default pool;
