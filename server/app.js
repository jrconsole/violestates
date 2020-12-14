const express = require('express');
const app = express(); // create an instance of the express module (app is the conventional variable name used)

const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

const cors = require('cors'); // import the CORS library to allow Cross-origin resource sharing
app.use(cors()); // Enable CORS 

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); // Recognize Request Objects as JSON objects
app.use(express.static('build')); // serve static files (css & js) from the 'public' directory

const properties = [
    {
        id: 1,
        price: 1200,
        numBed: 1,
        numBath: 1,
        name: "My First Apartment",
        address: "123 Cool Ln.",
        city: "AwesomeTown"
    },
    {
        id: 2,
        price: 2600,
        numBed: 2,
        numBath: 2,
        name: "Our Apartment",
        address: "456 Okay St.",
        city: 'Yeahsville'
    }
];

let lastId = 2;

app.get('/properties', (req, res, next) => {
    res.status(200).send({properties: properties});
})

app.get('/properties/:id', (req, res, next) => {
    const id = req.params.id;

    const property = properties.find(property => {
        return property.id === Number(id);
    })
    res.status(200).send({ property });
})

app.post('/properties', (req, res, next) => {
    const property = req.body.property;
    property.id = lastId + 1;
    properties.push(property);
    lastId++;
    res.status(201).send({ property: property })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})