let locations = [

];

function getLoc(){

    const c = document.getElementById('cord');

    const co = c.value.split(" ");

    const cord = {lat: parseFloat(co[0]), lng: parseFloat(co[1])};

    locations.push(cord);

    c.value = "";

    initMap()

}

// Initialize and add the map

function initMap() {

    console.log("Init ran");
    
    // The location of cord
    console.log(locations);


    // The map, centered at cord
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: new google.maps.LatLng(0, 0),
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

      map.zoom = 13;
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