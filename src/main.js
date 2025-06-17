import L from "leaflet";

let map;

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  initToolbar();
});

function initMap() {
  map = L.map("map").setView([57.427, 14.216], 10);
  
  const layers = {
    "Google Satellit": L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "Google Hybrid": L.tileLayer("https://mt1.google.com/vt/lyrs=y&lyrs=h&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "OpenStreetMap": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "OpenStreetMap" })
  };

  layers["Google Hybrid"].addTo(map);
  L.control.layers(layers).addTo(map);
}

function initToolbar() {
  const toolbar = document.createElement("div");
  toolbar.id = "toolbar";
  toolbar.innerHTML = `
    <button id="gisDataBtn">
      <img src="emlid_reach_rx_icon.png" alt="GIS-data" />
    </button>
    <button id="addPoleBtn">📍</button>
  `;
  
  document.body.appendChild(toolbar);
  
  document.getElementById("gisDataBtn").addEventListener("click", handleGisData);
  document.getElementById("addPoleBtn").addEventListener("click", addPole);
}

function addPole() {
  map.on("click", (e) => {
    const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup(`Stolpe (${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)})`).openPopup();
  });
}

function handleGisData() {
  alert("Här kan du ladda upp och hantera GIS-data!");
}
