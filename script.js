var watchId;
var map;
function startTrackingPosition(){
    //add autocomplete to inputs
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var options = {
        types: ['geocode']
    }
    var autocomplete1 = new google.maps.places.Autocomplete(from, options);
    var autocomplete2 = new google.maps.places.Autocomplete(to, options);
    //calculate the distance
    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService;
    // Create a renderer for directions and bind it to the map.
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    google.maps.event.addListener(autocomplete1, "place_changed", calcDistance);
    google.maps.event.addListener(autocomplete2, "place_changed", calcDistance);
    
    function calcDistance() {
        //draw the direction
        var poly = new google.maps.Polyline({ strokeColor: "#2518DD", strokeWeight: 4 });
        //set from and to values and travel mode
        var request = {
            origin: document.getElementById("from").value,
            destination: document.getElementById("to").value,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        //send request
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                //delete all routes
                directionsDisplay.setDirections({ routes: [] });
                map.setCenter(map.center);
            }
        });
    }
}
function initMap(){
    if(navigator.geolocation){
        watchId = navigator.geolocation.watchPosition(successPosition);
    }else{
        alert('Géolocalisation indisponible');
    }
}
function stopWatchingPosition(){
    navigator.geolocation.clearWatch(watchId);
}
function successPosition(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var mapOptions = {
        center : new google.maps.LatLng(lat,long),
        zoom : 18,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
    //add marker to the interactive map
    var marker = new google.maps.Marker({
        position : new google.maps.LatLng(lat,long),
        map : map,
        title : "Ma position",
        animation : google.maps.Animation.DROP
    });
    //add info window to the marker
    var info = new google.maps.InfoWindow({
        content : "Ma position actuelle"
    });
    //info.open(map,marker);
    google.maps.event.addListener(marker,"click",function(){
        info.open(map,marker);  
    });
}
