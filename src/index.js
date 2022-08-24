import * as L from 'leaflet';
import style from './style.css';
import icon from './icon.png';

import * as data from './data.json';



const map = L.map('map').setView([40, -5], 7);
const disableIcon = L.icon({
    iconUrl: icon,

    iconSize:     [50, 96], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//render markers 
for (let i = 0; i < 100; i++) {
    L.marker([data[i].lat, data[i].lon], { icon: disableIcon}).addTo(map);
}

console.log("Hello World!");
