import * as L from 'leaflet';
import style from './style.css';
import * as data from './data.json';



const map = L.map('map').setView([40, -5], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//render markers 
for (let i = 0; i < 100; i++) {
    L.marker([data[i].lat, data[i].lon]).addTo(map);
}

console.log("Hello World!");
