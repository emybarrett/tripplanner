const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiaGlsYXJ5d2VueWlkZWFsIiwiYSI6ImNqb2dhc2M3aTAxYjgza3F0c3J0Zjk3MHMifQ.ndA30U5fdxtHEQuV-ZQdDQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});