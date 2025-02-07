function initMap() {
    // Latitude and Longitude
    // var myLatLng = {lat: -6.207690, lng: 106.985270};
    var myLatLng = {lat: 42.29493, lng: -84.04053};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' 23018 Evergreen Cir, Chelsea, MI 48118, USA' // Title Location
    });
}