(function(){
    var xmlHttpRequest = new XMLHttpRequest();
    var url = "http://localhost/gestion-bus/database/get-data.php";
    xmlHttpRequest.open("GET",url,false);
    xmlHttpRequest.send();
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
        var result = xmlHttpRequest.responseText;
        drawMap(result);
    }else{
        alert("Aucune donnée trouvée");
    }
})();
function drawMap(result){
    var arr = result.split("</br>");
    //console.log(arr);
    var center = arr[0].split(":");
    //console.log(center);
    var latitude = center[0];
    //console.log(latitude);
    var longitude = center[1];
    //console.log(longitude);
    var position = new google.maps.LatLng(latitude,longitude);
    var mapOptions =  {
            center : position,
            zoom : 11,
            mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
    latlngbounds = new google.maps.LatLngBounds();
    for(var i=0;i<arr.length-1;i++){
        var store = arr[i];
        drawMarker(store);
    }
    map.fitBounds(latlngbounds);
}
function drawMarker(store){
    var position = store.split(":");
    var location = new google.maps.LatLng(position[0],position[1]);
    var marker = new google.maps.Marker({
        position:location,
        map:map
    });
    latlngbounds.extend(marker.position);
    var myInfoWindow = new google.maps.InfoWindow({
        content : "<b>Bus :</b>" + position[2] + "</br>" + "<b>Adresse :</b>" + getAdress(position[0],position[1])
    });
    google.maps.event.addListener(marker,'click',function(){
        myInfoWindow.open(map,marker);
    }); 
}    
function getAdress(lat,long){
    var xmlHttpRequest = new XMLHttpRequest();
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=true";
    xmlHttpRequest.open("GET",url,false);
    xmlHttpRequest.send();
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var result  = xmlHttpRequest.responseText;
            var resultInfo = eval("("+ result +")");
            //console.log(resultInfo);
            adress = resultInfo.results[0].formatted_address;
            return adress;
    }else{
        alert("Aucune donnée trouvée");
    }
}