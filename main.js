let locations = [];

function getLoc(){

    const la = document.getElementById('la');
    const lo = document.getElementById('lo');

    /* const cord = {lat: parseFloat(la.value), lng: parseFloat(lo.value)}; */

    const cord = []

    cord.push(parseFloat(la.value));
    cord.push(parseFloat(lo.value));

    locations.push(cord);

    console.log(locations);

    la.value = '';
    lo.value = '';

    initMap()

}

// Initialize and add the map

function initMap() {

    console.log("Init ran");
    
    // The location of cord
    console.log(locations);


    // The map, centered at cord
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: new google.maps.LatLng(locations[0][0], locations[0][1]),
    });

    // The marker, positioned at cord

  }
  
  window.initMap = initMap;