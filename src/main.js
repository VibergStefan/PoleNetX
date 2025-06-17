import parseDXF from "./dxf-parser.js";
import validateDesign from "./validation.js";
import generatePDF from "./export.js";
import L from "leaflet";

let map;
let polyline = null;
let poles = [];

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  document.getElementById("processGisBtn").addEventListener("click", handleGisData);
  document.getElementById("validateBtn").addEventListener("click", validateDesignFlow);
  document.getElementById("exportBtn").addEventListener("click", () => generatePDF(poles));
});

function initMap() {
  map = L.map("map").setView([57.427, 14.216], 10);
  const layers = {
    "Google Satellit": L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "Google Hybrid": L.tileLayer("https://mt1.google.com/vt/lyrs=y&lyrs=h&x={x}&y={y}&z={z}", { attribution: "Google Maps" }),
    "OpenStreetMap": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "OpenStreetMap" })
  };
  layers["Google Satellit"].addTo(map);
  L.control.layers(layers).addTo(map);
}

function handleGisData() {
  const file = document.getElementById("gisFile").files[0];
  const action = document.getElementById("gisAction").value;
  if (!file) {
    alert("Ingen fil vald!");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    if (file.name.endsWith(".dxf")) {
      processDXF(e.target.result);
    } else if (file.name.endsWith(".csv")) {
      processCSV(e.target.result);
    } else if (file.name.endsWith(".shp")) {
      processSHP(e.target.result);
    } else {
      alert("Filformatet stöds inte!");
    }
  };
  reader.readAsText(file);
}

function validateDesignFlow() {
  if (!poles.length) {
    alert("Ingen stolpe placerad.");
    return;
  }
  const voltage = document.getElementById("voltage").value;
  const result = validateDesign(poles, voltage);
  alert(`Validering klar:\n${result.message}`);
}
