const express = require('express');
const app = express(); // create an instance of the express module (app is the conventional variable name used)

const db = require('./server/queries');

const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

const cors = require('cors'); // import the CORS library to allow Cross-origin resource sharing
app.use(cors()); // Enable CORS 

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.json()); // Recognize Request Objects as JSON objects
app.use(express.static('build')); // serve static files (css & js) from the 'public' directory

app.get('/props', (req, res, next) => {
    db.getAllProperties(res);
})

app.get('/props/:id', (req, res, next) => {
    if (!isNaN(req.params.id)) {
        db.getProperty(req.params.id, res);
    } else {
        res.status(500).send();
    }
})

app.post('/props', (req, res, next) => {
    const property = req.body.property;
    db.postProperty(property, res);
})

app.delete('/props/:id', (req, res, next) => {
    db.deleteProperty(req.params.id, res);
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})