let locations = [];

async function readJSON(){

  let response = await fetch("http://localhost:8000/data.json");
  let coordinateData = await response.json();

  for (let i = 0; i<coordinateData.length; i++){

    console.log(coordinateData);
    latitude = parseFloat(coordinateData[i]['cord'][0]);
    longitude = parseFloat(coordinateData[i]['cord'][1]);
    nlatitude = parseFloat(coordinateData[i]['ncord'][0]);
    nlongitude = parseFloat(coordinateData[i]['ncord'][1]);

    let no = [{lat:latitude, lng:longitude}, {lat:nlatitude, lng:nlongitude}];

    locations.push(no);
  } 

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

  /* for (let i = 0; i<locations.length; i++){
    
    let pos = new google.maps.LatLng(locations[i].lat, locations[i].lng);

    let marker = new google.maps.Marker({
      position: pos,
      map: map,
    
    });

    map.zoom = 13;
    map.center = pos;
  } */
  for(let i = 0; i<locations.length; i++){
    console.log(locations[i])
    const line = new google.maps.Polyline({
      path: locations[i],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: map,
    });
  }

  console.log(locations.lenght)

}
  
  

  window.initMap = initMap;



