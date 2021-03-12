/* All of the js code on this page was created with the help of the following sources:
https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=en_GB
https://developers.google.com/maps/documentation/javascript/infowindows
https://gist.github.com/Cathon/9f650b5b722abc28e715
and then adapted to suit my project by me */

var map;
var infowindow;

/* Swim Locations */
var locations = [
    {lat: 51.70635, lng: -2.90853},
    {lat: 51.65614, lng: -2.64334},
    {lat: 51.39025, lng: -3.27407},
    {lat: 51.57152, lng: -2.96103},
    {lat: 51.58368, lng: -3.21421},
    {lat: 51.81421, lng: -2.70967}
];

/* Info Windows content for swim locations */
var contents = [
    "<h3>Usk Island</h3><br><h4>River swim</h4><br><p>A472, Usk, NP15 1SZ</p>",
    "<h3>National Diving & Activity Centre</h3><br><h4>Lake swim</h4><br><p>Chepstow, NP16 7LQ</p>",
    "<h3>Barry Island</h3><br><h4>Sea swim</h4><br><p>Whitmore Bay, CF62 5TJ</p>",
    "<h3>Newport Int. Sports Village</h3><br><h4>Indoor Pool</h4><br><p>Velodrome Way, NP19 4RA</p>",
    "<h3>Caerphilly Lesiure Centre</h3><br><h4>Indoor Pool</h4><br><p>Virginia Park, CF83 3SW</p>",
    "<h3>Monmouth Leisure Centre</h3><br><h4>Indoor Pool</h4><br><p>Old Dixton Road, NP25 3DP</p>"
];

/* Initilising and centering map */
function initMap() {
    var latlng = {lat: 51.67921, lng: -2.90918};
    var mapOptions = {
        center: latlng,
        zoom: 9
    };
    /* Adding multiple map markers with location and info Window content */
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < locations.length; i++) {
        createMarker(locations[i], contents[i]);
    }
}

function createMarker(location, content) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    /* Opens info Window when location marker is clicked */
    marker.addListener('click', function() {
       infowindow.setContent(content);
       infowindow.open(map, this);
    });
}



