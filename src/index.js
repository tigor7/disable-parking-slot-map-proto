import * as L from 'leaflet';
// imported here so webpack copy it to dist
import style from './style.css'; 
import style2 from 'leaflet.markercluster/dist/MarkerCluster.css';
import style3 from 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import file from 'leaflet.markercluster/dist/leaflet.markercluster.js'




import icon from './icon.png';

import * as data from './data.json';



const map = L.map('map').setView([40, -5], 7);
const disableIcon = L.icon({
    iconUrl: icon,

    iconSize:     [38, 60], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    iconAnchor: [19, 60],

    popupAnchor:  [19, -60] // point from which the popup should open relative to the iconAnchor
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const renderedMarkers = new L.MarkerClusterGroup();

for (let i = 0; i < data.length; i++) {
    const mark = renderedMarkers.addLayer(L.marker([data[i].lat, data[i].lon], {icon: disableIcon}))
    map.addLayer(mark);
}