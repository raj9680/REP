function initMap() {
  //   var napa = {
  //     info: '<strong>NAPA</strong><br>\r\
  // 					1303 Jefferson Street, <br> Suite 210A, Napa, CA 94559<br>\
  // 					<a href="https://goo.gl/NNBXMD" target="_blank">Get Directions</a>',
  //     lat: 38.299941,
  //     long: -122.2960867,
  //   };

  //   var petaluma = {
  //     info: '<strong>Petaluma</strong><br>\r\
  // 					755 Baywood Drive,2nd Floor, <br>  Petaluma, CA 94954<br>\
  // 					<a href="https://goo.gl/NNBXMD" target="_blank">Get Directions</a>',
  //     lat: 38.2310468,
  //     long: -122.6155872,
  //   };

  var sacramento = {
    info: '<strong>North Office</strong><br>\r\
	202, 5403 Crowchild Tr. NW ,  <br> Calgary, AB T3B 4Z1<br>\
					<a href="https://maps.app.goo.gl/bCRtQMKE5yK4Gdek9" target="_blank">Get Directions</a>',
    lat: 51.1038044,
    long: -114.1655494,
  };

  var SanDiego = {
    info: '<strong>South Office</strong><br>\r\
	  #100, 5810 2nd Street SW Calgary, <br> Alberta T2H 0H2<br>\
  					<a href="https://maps.app.goo.gl/AgguMmF3ftt5sws68" target="_blank">Get Directions</a>',
    lat: 51.0020673,
    long: -114.0683957,
  };

  var locations = [
    [sacramento.info, sacramento.lat, sacramento.long, 1],
    [SanDiego.info, SanDiego.lat, SanDiego.long, 0],
  ];

  try{
      var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: new google.maps.LatLng(51.0642845, -114.1395738),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
  }catch(e){

  }


  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
