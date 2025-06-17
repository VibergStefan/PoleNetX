import parseDXF from "./dxf-parser.js";
import validateDesign from "./validation.js";
import generatePDF from "./export.js";

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
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const parsed = parseDXF(e.target.result);
    if (!parsed || parsed.length === 0) {
      alert("Ingen centrumlinje hittades.");
      return;
    }

    if (polyline) map.removeLayer(polyline);
    polyline = L.polyline(parsed.map(pt => [pt.y, pt.x]), { color: "blue" }).addTo(map);
    map.fitBounds(polyline.getBounds());

    poles = [{ ...parsed[0], label: "Stolpe 1" }];
    L.marker([parsed[0].y, parsed[0].x]).addTo(map).bindPopup("Stolpe 1");
  };
  reader.readAsText(file);
}

function validateDesignFlow() {
  if (!poles.length) {
    alert("Ingen stolpe placerad.");
    return;
  }

  const voltage = document.getElementById("voltage").value;
  const terrain = document.getElementById("terrain").value;

  const result = validateDesign(poles, voltage, terrain);
  alert(`Validering klar:\n${result.message}`);
}
