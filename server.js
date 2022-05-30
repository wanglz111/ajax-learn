const express = require('express');
const { param } = require('express/lib/request');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('<p>Hello World!</p>');
});

app.post('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send("ok");
});

app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('Hello World!');
    }, 2000);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

app.on('error', (err) => {
    console.log(err);
});