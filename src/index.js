const mapboxgl = require("mapbox-gl");
const marker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoiaGlsYXJ5d2VueWlkZWFsIiwiYSI6ImNqb2dhc2M3aTAxYjgza3F0c3J0Zjk3MHMifQ.ndA30U5fdxtHEQuV-ZQdDQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
//new mapboxgl.Marker(document.getElementById('FullstackNY')).setLngLat([-74.009151, 40.705086]).addTo(map);
//new mapboxgl.Marker(marker(activity)).setLngLat(location).addTo(map);