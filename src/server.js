import express from 'express'; // install express
import notes from './routes/notes.js';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

// set up app
const app = express();
// specify port
const PORT = 5000;

// serve html
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
        console.log("hi");
    }
    catch (err) {
        console.error(err.message);
    }
})

app.use('/api', notes);

//start server- listens for requests
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})