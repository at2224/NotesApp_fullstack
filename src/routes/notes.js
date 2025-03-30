import express from 'express';
import pool from '../db.js';
// need express to use api method requests
const router = express.Router();

// save note to db
router.post('/notes', async (req, res) => {
    try {
        const {note_text} = req.body;
        await pool.query("INSERT INTO notesDB (note_text) VALUES ($1)", [note_text]);
        res.json({message: "saved note"});
    }
    catch (err) {
        console.error(err.message);
    }
});

// get note on reload
router.get('/notes/:id?', async (req, res) => {
    try {
        const note_id = req.params.id;
        let result;
        if (!note_id) {
            result = await pool.query("SELECT * FROM notesDB");
        }
        else {
            result = await pool.query("SELECT * FROM notesDB where id = ($1)", [note_id]);
        }
        // const result = await pool.query("SELECT * FROM notesDB");
        if (!result.rows) {
            res.json({message: "No note found"});
        }
        else {
            res.json(result.rows);
        }
    }
    catch (err) {
        console.error(err.message);
    }
});

router.delete('/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM notesDB WHERE id = $1', [id]);
        res.json({ message: "Note deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// exports the entire router object which includes all the api methods
export default router;