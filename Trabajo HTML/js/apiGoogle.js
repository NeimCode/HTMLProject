document.addEventListener("DOMContentLoaded", function () {

    var mapa = L.map('map').setView([38.988333, -0.518333], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    L.control.scale().addTo(mapa);
    L.control.zoom().addTo(mapa);

    var iconoPersonalizado = L.icon({
        iconUrl: '../img/favicon.png',
        iconSize: [38, 38],
        iconAnchor: [22, 38],
        popupAnchor: [-3, -76]
    });

    var marcador1 = L.marker([38.988333, -0.518333], { icon: iconoPersonalizado }).addTo(mapa);
    marcador1.bindPopup("<b>Instituto!</b><br>Aquí es donde estudio.");

    var marcador2 = L.marker([38.990000, -0.520000], { icon: iconoPersonalizado }).addTo(mapa);
    marcador2.bindPopup("<b>Miau!</b><br>No sé qué poner aquí.");
});

