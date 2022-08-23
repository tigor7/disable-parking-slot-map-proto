import * as L from 'leaflet';
import style from './style.css';

const map = L.map('map').setView([0, 0], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

console.log("Hello World!");
