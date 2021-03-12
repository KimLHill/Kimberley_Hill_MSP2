let map;

/* Code taken from https://developers.google.com/maps/documentation/javascript/custom-markers?hl=en_GB and styled to my project me */
/* Initialise and center the map */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(51.61057, -2.95654),
    zoom: 10,
  });

  /* Followed example in https://www.bing.com/videos/search?q=how+to+use+google+maps+api+to+display+different+locations+with+different+button+clicks&docid=608010461900771143&mid=0EB559B0CB45BB09ADB70EB559B0CB45BB09ADB7&view=detail&FORM=VIRE to produce my code */
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
              lat: 51.39025,
              lng: -3.27407
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.57152,
              lng: -2.96103
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.58368,
              lng: -3.21421
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.81421,
              lng: -2.70967
          }],
          type: 'swim'
        },
        {
            LatLng: [{
              lat: 51.57418,
              lng: -2.95690
          }],
          type: 'bike'
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
          type: 'bike'
        },
        {
            LatLng: [{
              lat: 51.63778,
              lng: -2.82674
          }],
          type: 'bike'
        },
        {
            LatLng: [{
              lat: 51.64210,
              lng: -2.67439
          }],
          type: 'bike'
        },
        {
            LatLng: [{
              lat: 51.82184,
              lng: -3.01764
          }],
          type: 'bike'
        },
        {
            LatLng: [{
              lat: 51.51086,
              lng: -3.16102
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.64625,
              lng: -2.68274
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.80035,
              lng: -3.16546
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.59193,
              lng: -3.04106
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.65637,
              lng: -3.01408
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.58325,
              lng: -2.77822
          }],
          type: 'run'
        },
        {
            LatLng: [{
              lat: 51.69768,
              lng: -2.68568
          }],
          type: 'run'
        },
  ];

  /* Creating map markers */
  for (let i = 0; i < markersOnMap.length; i++) {
    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map,
    });
  }
}
