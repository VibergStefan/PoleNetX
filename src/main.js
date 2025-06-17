import initCAD from "./cad-view.js";
import initGISTools from "./gis-tools.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("switchToGIS").addEventListener("click", () => switchView("gis"));
  document.getElementById("switchToCAD").addEventListener("click", () => switchView("cad"));
  
  initGISTools();
  initCAD();
});

function switchView(view) {
  document.getElementById("cad-container").style.display = view === "cad" ? "flex" : "none";
}
