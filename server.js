//server.js

//importing the necessary modules to use in the website
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3480;


// Where we will keep products after they are sent to the server
let products = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handles the get requests coming to the root url
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html'));
});
//handles the post requests sent to the server's product url.
app.post('/product', (req, res) => {
    const product = req.body;

    // Output the product to the console for debugging
    console.log(product);
    //When a product is posted it is added to the products array
    products.push(product);
    //Serves the index.html file to the browser
    res.sendFile(path.join(__dirname+'/src/index.html'));
});
//handles the get requests sent to the server
app.get('/products', (req, res) => {
    //returns the products array in JSON format
    res.json(products);
});

app.listen(port, () => console.log(`Commerce site is listening on port: ${port}!`));


