let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App started on Port ${PORT}`));

app.use(express.static('.'));

app.set('view engine', 'ejs');

let mapData = {
    apiKey: '',
    mapCentre: 'London,UK',
    mapHeight: 300,
    mapWidth: 600,
    mapZoom: 14,
    mapType: 'roadmap',
    mapMarker: {
        color: '0xff0000',
        label: 'London, UK'
    }
};

app.get('/', (req, res) => {
    res.sendFile('index.html');
});