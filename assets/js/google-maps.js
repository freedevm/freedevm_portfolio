function initMap() {
    // Latitude and Longitude
    // var myLatLng = {lat: -6.207690, lng: 106.985270};
    var myLatLng = {lat: 42.29373, lng: -84.09385};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' 4030 Kalmbach Rd, Chelsea, MI 48118' // Title Location
    });
}