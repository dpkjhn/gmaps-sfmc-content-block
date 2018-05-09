// if (window.self === window.top) {
//     document.body.innerText = 'This application is for use in the Salesforce Marketing Cloud Content Builder only!';;
// }

let sdk = new window.sfdc.BlockSDK(); //initalize SDK

let mapData = {
    apiKey: '',
    mapCentre: 'London, UK',
    mapHeight: 300,
    mapWidth: 600,
    mapZoom: 14,
    mapMarker: {
        color: '0xff0000',
        label: 'London, UK'
    }
};

// let defaultContent = '<img width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=London,+UK&zoom=12&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true" alt="Google Map">';
let defaultContent = '<img src="https://dj-gmaps-sfmc-content-nlock.herokuapp.com//dragIcon.png">';

let saveData = () => {
    // console.log('Saving data...');

    // mapData.apiKey = document.getElementById('apiKey').value;
    mapData.mapWidth = document.getElementById('mapWidth').value;
    mapData.mapHeight = document.getElementById('mapHeight').value;
    mapData.mapCentre = document.getElementById('mapCentre').value;
    mapData.mapZoom = document.getElementById('mapZoom').value;


    sdk.setData(mapData, (data) => {
        // mapData = data;
        let content = '<img width="' + mapData.mapWidth + '" src="https://maps.googleapis.com/maps/api/staticmap?center=' + mapData.mapCentre + '&zoom=' + mapData.mapZoom + '&scale=1&size=' + mapData.mapWidth + 'x' + mapData.mapHeight + '&maptype=roadmap&format=png&visual_refresh=true&&markers=size:mid%7Ccolor:' + mapData.mapMarker.color + '%7Clabel:%7C' + mapData.mapCentre + '" alt="Google Map">';

        //check for ampscript
        if (content.search('%%') === -1) {
            sdk.setSuperContent(defaultContent, (newSuperContent) => {});
        }
        sdk.setContent(content);
        sdk.setSuperContent(content, (newSuperContent) => {});
    });

    console.log(JSON.stringify(mapData));
}

let fetchData = () => {

    // console.log('Loading data...');

    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            mapData = data;
            // document.getElementById('apiKey').value = mapData.apiKey;
            document.getElementById('mapWidth').value = mapData.mapWidth;
            document.getElementById('mapHeight').value = mapData.mapHeight;
            document.getElementById('mapCentre').value = mapData.mapCentre;
            document.getElementById('mapZoom').value = mapData.mapZoom;

            // console.log('Found data!');
        }
    });

    console.log(JSON.stringify(mapData));
}

saveData();
// sdk.setSuperContent(defaultContent, (newSuperContent) => {
//     defaultContent = newSuperContent;
// });

window.onload = fetchData;
window.onchange = saveData;