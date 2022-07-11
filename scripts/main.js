let locations = [];

async function readJSON(){

  let response = await fetch("http://localhost:8000/data.json");
  let coordinateData = await response.json();

  for (let i = 0; i<coordinateData.length; i++){

    console.log(coordinateData);
    coordinateData[i]['id'] = parseInt(coordinateData[i]['id']);
    coordinateData[i]['x'] = parseFloat(coordinateData[i]['x']);
    coordinateData[i]['y'] = parseFloat(coordinateData[i]['y']);
    locations.push({lat:coordinateData[i]['x'], lng:coordinateData[i]['y']})
  } 

  initMap()

}


function getLoc(){

    const c = document.getElementById('cord');

    const co = c.value.split(" ");

    const cord = {x: parseFloat(co[0]), y: parseFloat(co[1])};

    locations.push(cord);

    c.value = "";

    initMap()

}

// Initialize and add the map

function initMap() {

  // The map, centered at cord
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: new google.maps.LatLng(0, 0),
  });
  // The marker, positioned at cord

  for (let i = 0; i<locations.length; i++){
    
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



