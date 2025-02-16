import express from 'express'; // install express

// set up app
const app = express();
// specify port
const PORT = process.env.PORT || 5432;

// serve html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
})


//start server- listens for requests
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})