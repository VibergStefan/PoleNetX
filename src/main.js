import parseDXF from "./dxf-parser.js";
import validateDesign from "./validation.js";
import generatePDF from "./export.js";
import L from "leaflet";

let map;
let polyline = null;
let poles = [];

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  document.getElementById("dxfFile").addEventListener("change", handleFile);
  document.getElementById("validateBtn").addEventListener("click", validateDesignFlow);
  document.getElementById("exportBtn").addEventListener("click", () => generatePDF(poles));
});

function initMap() {
  map = L.map("map").setView([57.427, 14.216], 10);

  const layers = {
    "Google Satellit": L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "Google Hybrid": L.tileLayer("https://mt1.google.com/vt/lyrs=y&lyrs=h&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "Google Terräng": L.tileLayer("https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "OpenStreetMap": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "OpenStreetMap" })
  };

  layers["Google Satellit"].addTo(map); // Standardlager
  L.control.layers(layers).addTo(map);
}
