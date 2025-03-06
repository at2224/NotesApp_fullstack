import express from 'express';
import pool from '../db.js';
// need express to use api method requests
const router = express.Router();

// save note to db
router.post('/', async (req, res) => {
    try {
        const {note_text} = req.body;
        await pool.query("INSERT INTO notesDB VALUES $1", [note_text]);
    }
    catch (err) {
        console.err(err.message);
    }
});

// get note on reload
router.post('/', async (req, res) => {
    try {
        const {note_id} = req.body;
        const result = await pool.query("SELECT * FROM notesDB where id = $1", [note_id]);
        res.json(result.rows);
    }
    catch (err) {
        console.err(err.message);
    }
});

// exports the entire router object which includes all the api methods
export default router;