document.addEventListener("DOMContentLoaded", function () {

    var map = L.map('map').setView([38.988333, -0.518333], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add map controls
    L.control.scale().addTo(map);
    L.control.zoom().addTo(map);

    // Custom icon
    var customIcon = L.icon({
        iconUrl: '../img/favicon.png',
        iconSize: [38, 38], // Size of the icon
        iconAnchor: [22, 38], // Point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // Point from which the popup should open relative to the iconAnchor
    });

    // First marker with a custom icon and popup
    var marker1 = L.marker([38.988333, -0.518333], { icon: customIcon }).addTo(map);
    marker1.bindPopup("<b>Instituto!</b><br>Aquí es donde estudio.");

    // Second marker with a custom icon and popup
    var marker2 = L.marker([38.990000, -0.520000], { icon: customIcon }).addTo(map);
    marker2.bindPopup("<b>Meow!</b><br>No sé que poner aquí.");

});

