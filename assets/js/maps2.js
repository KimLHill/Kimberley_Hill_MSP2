/* Defining variables */
var map;
var InfoObj = [];
/* Centering map on Gwent */
var centerCords = {
    lat: 51.61057,
    lng: -2.95654
};

/* Followed the tutorial video at https://www.bing.com/videos/search?q=how+to+use+google+maps+api+to+display+different+locations+with+different+button+clicks&docid=608010461900771143&mid=0EB559B0CB45BB09ADB70EB559B0CB45BB09ADB7&view=detail&FORM=VIRE to produce my code */
 /* Customised map marker icons to different colours for swim, bike & run locations */
  const icons = {
    swim: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    bike: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    },
    run: {
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    },
  };

   /* Setting lat and lng for map marker points and allocating to custom map marker type */
  let markersOnMap = [
      {
          placeName: 'Usk Island',
          LatLng: [{
              lat: 51.70635,
              lng: -2.90853
          }],
          type: 'swim'
        },
        {
            placeName: 'National Diving & Activity Centre',
            LatLng: [{
              lat: 51.65614,
              lng: -2.64334
          }],
          type: 'swim'
        },
        {
            placeName: 'Barry Island',
            LatLng: [{
              lat: 51.39025,
              lng: -3.27407
          }],
          type: 'swim'
        },
        {
            placeName: 'Newport International Sports Village',
            LatLng: [{
              lat: 51.57152,
              lng: -2.96103
          }],
          type: 'swim'
        },
        {
            placeName: 'Caerphilly Leisure Centre',
            LatLng: [{
              lat: 51.58368,
              lng: -3.21421
          }],
          type: 'swim'
        },
        {
            placeName: 'Monmouth Leisure Centre',
            LatLng: [{
              lat: 51.81421,
              lng: -2.70967
          }],
          type: 'swim'
        },
        {
            placeName: 'Wales National Velodrome',
            LatLng: [{
              lat: 51.57418,
              lng: -2.95690
          }],
          type: 'bike'
        },
        {
            placeName: 'Goldcroft Common',
            LatLng: [{
              lat: 51.61162,
              lng: -2.96037
          }],
          type: 'bike'
        },
        {
            placeName: 'Usk',
            LatLng: [{
              lat: 51.70248,
              lng: -2.90373
          }],
          type: 'bike'
        },
        {
            placeName: 'Wentwood',
            LatLng: [{
              lat: 51.63778,
              lng: -2.82674
          }],
          type: 'bike'
        },
        {
            placeName: 'Chepstow',
            LatLng: [{
              lat: 51.64210,
              lng: -2.67439
          }],
          type: 'bike'
        },
        {
            placeName: 'Abergavenny',
            LatLng: [{
              lat: 51.82184,
              lng: -3.01764
          }],
          type: 'bike'
        },
        {
            placeName: 'National Indoor Athletics Centre',
            LatLng: [{
              lat: 51.51086,
              lng: -3.16102
          }],
          type: 'run'
        },
        {
            placeName: 'Wye Valley Trail',
            LatLng: [{
              lat: 51.64625,
              lng: -2.68274
          }],
          type: 'run'
        },
        {
            placeName: 'Ebbw Faur Trail',
            LatLng: [{
              lat: 51.80035,
              lng: -3.16546
          }],
          type: 'run'
        },
        {
            placeName: 'Fourteen Locks',
            LatLng: [{
              lat: 51.59193,
              lng: -3.04106
          }],
          type: 'run'
        },
        {
            placeName: 'Cwmbran',
            LatLng: [{
              lat: 51.65637,
              lng: -3.01408
          }],
          type: 'run'
        },
        {
            placeName: 'Rogiet Countryside Park',
            LatLng: [{
              lat: 51.58325,
              lng: -2.77822
          }],
          type: 'run'
        },
        {
            placeName: 'Tintern',
            LatLng: [{
              lat: 51.69768,
              lng: -2.68568
          }],
          type: 'run'
        },
  ];

  /* Calling map */
window.onload = function() {
    this.initMap();
};

/* Adding marker points */
function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ){
        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        /* Adding content to info window */
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        /* adding info window pop up when marker is clicked */
        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InfoObj[0] = infowindow;
        });
    }
}

/* Closing any opened info windows so new one can be displayed */
function closeOtherInfo(){
    if( InfoObj.length > 0) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }
}

/* Initialising map */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: centerCords
    });
    addMarkerInfo();
}



