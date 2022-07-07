let locations = [

];

function getLoc(){

    const la = document.getElementById('la');
    const lo = document.getElementById('lo');

    const cord = {lat: parseFloat(la.value), lng: parseFloat(lo.value)};

    locations.push(cord);

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
      center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
    });
    // The marker, positioned at cord

    for (let i = 0; i<locations.length; i++){

      console.log("a");
      console.log(locations[i]);

      let pos = new google.maps.LatLng(locations[i].lat, locations[i].lng);

      let marker = new google.maps.Marker({
        position: pos,
        map: map,
      });

      map.center = pos;
    }

    const line = new google.maps.Polyline({
      path: locations,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    line.setMap(map);

  

  } 
  
  window.initMap = initMap;