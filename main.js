let locations = [

];

function getLoc(){

    const la = document.getElementById('la');
    const lo = document.getElementById('lo');

    /* const cord = {lat: parseFloat(la.value), lng: parseFloat(lo.value)}; */

    let cord = [];

    cord.push(parseFloat(la.value));
    cord.push(parseFloat(lo.value));


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
      center: new google.maps.LatLng(locations[0][0], locations[0][1]),
    });
    // The marker, positioned at cord

    for (let i = 0; i<locations.length; i++){

      console.log("a");
      console.log(locations[i]);

      let pos = new google.maps.LatLng(locations[i][0], locations[i][1]);

      let marker = new google.maps.Marker({
        position: pos,
        map: map,
      });

      map.center = pos;
    }

  

  } 
  
  window.initMap = initMap;