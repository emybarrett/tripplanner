const { Marker } = require('mapbox-gl');

module.exports = function(type, coords) {
  const markerDomEl = document.createElement("div");
  let url = '';
  if (type === 'activity') {
    url = 'url(http://i.imgur.com/WbMOfMl.png)'
  } else if (type === 'hotel')  {
    url = 'url(http://i.imgur.com/D9574Cu.png)'
  } else if (type === 'restaurant') {
    url = 'url(http://i.imgur.com/cqR6pUI.png)'
  } else {
    type = 'activities';
  }
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = url;
  
  return new Marker(markerDomEl).setLngLat(coords);
};

//for reference:
// Activity: http://i.imgur.com/WbMOfMl.png
// Hotel: http://i.imgur.com/D9574Cu.png
// Restaurant: http://i.imgur.com/cqR6pUI.png