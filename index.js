let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App started on Port ${PORT}`));

app.use(express.static('.'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('index.html');
});