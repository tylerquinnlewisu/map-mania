var googleMap; 



function initMap() {


   
    googleMap = new google.maps.Map(document.getElementById('googleMapID'), {
        center: {lat: 40.4020, lng: -88.1}, zoom: 5.25});
        infoWindow = new google.maps.InfoWindow();
        
        

     

    var urbana = new google.maps.Marker({position:{lat:40.1020,lng:-88.2272}, map: googleMap,
    animation: google.maps.Animation.DROP});

    var lewis = new google.maps.Marker({position:{lat:41.6050,lng:-88.0806},map:googleMap,
    animation: google.maps.Animation.DROP});
  
    var infoWindowLewis = new google.maps.InfoWindow({content:'Lewis University'});
    lewis.addListener('click',function() {
        infoWindowLewis.open(googleMap,lewis);
    });
    var infoWindowUrbana = new google.maps.InfoWindow({content:'University of Illinois - Urbana Champaign'});
    urbana.addListener('click',function() {
        infoWindowUrbana.open(googleMap,urbana);
    });

    google.maps.event.addListener(googleMap,'idle',function() {
        updateGame()
    });
    

}

function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomlevel = googleMap.getZoom()
    var inBounds = false;
    if (googleMap.getBounds().contains({lat:41.6050,lng:-88.0806})) {
        inBounds=true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomlevel);
}

function initApplication() {
    console.log('Map Mania Version One - Starting! ');
}




 