import express from 'express'; // install express
import notes from './routes/notes.js';

// set up app
const app = express();
// specify port
const PORT = process.env.PORT || 5432;

// serve html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
})

app.use('/api', notes);

//start server- listens for requests
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})