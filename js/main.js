var map = GMaps({
    div: '#map',
    lat: 41.555239,
    lng: -87.442752
});

map.addMarker({
    lat: 41.555239,
    lng: -87.442752,
    title: 'TMC',
    infoWindow: {
        content: "<p>3542 Highway Ave.<br>Highland, IN 46322</p>"
    }
});