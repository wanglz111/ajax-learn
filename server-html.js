const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});