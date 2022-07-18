let locations = []; 

function sortFunction(a, b) {
        
    a = a.distance;
    b = b.distance;
    
    if (a === b) {
        return 0;
    }
    else {
        return (a < b) ? -1 : 1;
    }
}
 
// Function to sort the array of
// points by its distance from P
function sortArr(arr, p)
{
    // Vector to store the distance
    // with respective elements
     
    let vp = new Array(arr.length);
    let ds = new Array(arr.length);
    // Storing the distance with its
    // distance in the vector array
    for (let i = 0; i < arr.length; i++) {
   
        let dist = Math.pow((p[0] - arr[i].lat), 2)
              + Math.pow((p[1] - arr[i].lng), 2);
        vp[i] = {reference:p, distance:Math.sqrt(dist), coord:[arr[i].lat, arr[i].lng]};

        
        p = vp[i].coord;
        
    }
    
    vp.sort(sortFunction);

    let loc = new Array(arr.length);

   for(let k = 0; k<arr.length; k++){
      loc.push({lat: vp[k].coord[0], lng:vp[k].coord[1]});
    }
    
    return loc;
    
}

async function readJSON(){

  let response = await fetch("http://localhost:8000/data.json");
  let coordinateData = await response.json();

  for (let i = 0; i<coordinateData.length; i++){

    latitude = parseFloat(coordinateData[i]['cord'][0]);
    longitude = parseFloat(coordinateData[i]['cord'][1]);
    locations.push({lat:latitude, lng:longitude});
  } 

  new_locations = sortArr(locations, [0, 0]);

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

  /*for (let i = 0; i<locations.length; i++){
    
    let pos = new google.maps.LatLng(locations[i].lat, locations[i].lng);
    console.log(pos)
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
    
    });

    map.zoom = 13;
    map.center = pos;
  }*/

  console.log(new_locations)
  const line = new google.maps.Polyline({
    path: new_locations,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  line.setMap(map);
} 
  
  

  window.initMap = initMap;



