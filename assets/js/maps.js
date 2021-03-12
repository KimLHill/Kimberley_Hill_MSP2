let map;

/* Code taken from https://developers.google.com/maps/documentation/javascript/custom-markers?hl=en_GB and styled to my project me */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(51.67921, -2.90918),
    zoom: 9,
  });

  /* Followed example in https://www.bing.com/videos/search?q=how+to+use+google+maps+api+to+display+different+locations+with+different+button+clicks&docid=608010461900771143&mid=0EB559B0CB45BB09ADB70EB559B0CB45BB09ADB7&view=detail&FORM=VIRE to produce my code */
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
  
  var markersOnMap = [
      {
          LatLng: [{
              lat: 51.70635,
              lng: -2.90853
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.65614,
              lng: -2.64334
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.61162,
              lng: -2.96037
          }],
          type: 'bike'
        },
        {
            LatLng: [{
              lat: 51.70248,
              lng: -2.90373
          }],
          type: 'run'
        },
  ];

  // Create markers.
  for (let i = 0; i < markersOnMap.length; i++) {
    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map,
    });
  }
}
