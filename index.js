let express = require('express');

let app = express();

console.log('app started');

app.get('/', (req, res) => {
    res.render('index');
});