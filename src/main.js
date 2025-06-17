import initCAD from "./cad-view.js";
import initGISTools from "./gis-tools.js";
import L from "leaflet";

document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([57.427, 14.216], 10);
  
  L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenTopoMap & OpenStreetMap"
  }).addTo(map);

  document.getElementById("switchToGIS").addEventListener("click", () => switchView("gis"));
  document.getElementById("switchToCAD").addEventListener("click", () => switchView("cad"));
  
  initGISTools();
  initCAD();
});

function switchView(view) {
  document.getElementById("cad-container").style.display = view === "cad" ? "flex" : "none";
}
