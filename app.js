let express = require('express');

// create a new express application
let app = express();

// home page fn
let index = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home</h1>');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Not Found</h1>');
        res.end();
    }
};
let about = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>about</h1>');
    res.end();
};

//Get: /Hello/Zabi
let hello = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Hello ${req.params.name}</h1>`);
    res.end();
};

let redirect = (req, res) => {

    res.redirect('/');
}

// load pages
//: indicates a param value not a hard-coded part of a url ruqest
app.use('/about', about);
app.use('/hello/:name', hello);
app.use('redirect', redirect);
app.use('/', index);

// start express server
app.listen(3000);
console.log('Express running on port 3000');