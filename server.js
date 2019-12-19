//server.js
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3480;


// Where we will keep products
let products = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.post('/product', (req, res) => {
    const product = req.body;

    // Output the product to the console for debugging
    console.log(product);
    products.push(product);

    res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.get('/products', (req, res) => {
    res.json(products);
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


























// const http = require('http'),
//     url = require('url'),
//
//     makeServer = function (request,response){
//         let path = url.parse(request.url).pathname;
//         console.log(path);
//         if(path === '/'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('Welcome to the Classic products website. We offer the Best!!');
//         }
//         else if(path === '/products'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('Our products');
//         }
//         else if(path === '/contacts'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('Our Contacts: +254*********');
//         }
//         else{
//             response.writeHead(404,{'Content-Type':'text/plain'});
//             response.write('Error page');
//         }
//         response.end();
//     },
//     server = http.createServer(makeServer);
// server.listen(3480,()=>{
//     console.log('access the server on http://localhost:3480');
// });