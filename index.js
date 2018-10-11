let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App started on Port ${PORT}`));

app.use(express.static('.'));

app.set('view engine', 'ejs');

let mapData = {
    apiKey: '',
    mapCentre: 'London, UK',
    mapHeight: 300,
    mapWidth: 600,
    mapZoom: 14,
    mapType: 'roadmap',
    mapMarker: {
        color: '0xff0000',
        label: 'London, UK'
    }
};

// let content = `"https://maps.googleapis.com/maps/api/staticmap?center='${mapData.mapCentre}&zoom=${mapData.mapZoom}&scale=1&size=${mapData.mapWidth}x${mapData.mapHeight}&maptype=${mapData.mapType}&format=png&visual_refresh=true&&markers=size:mid%7Ccolor:${mapData.mapMarker.color}%7Clabel:%7C${mapData.mapCentre}"`;

// console.log('O: ' + content);

// console.log('E: ' + encodeURI(content));
// console.log('D: ' + decodeURI(content));


app.get('/', (req, res) => {
    res.sendFile('index.html');
});