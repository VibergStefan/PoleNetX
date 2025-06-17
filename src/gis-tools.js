export default function initGISTools() {
  document.getElementById("gisDataBtn").addEventListener("click", () => {
    alert("Här kan du hantera GIS-data!");
  });

  document.getElementById("addPoleBtn").addEventListener("click", addPole);
}

function addPole() {
  alert("Placera stolpe på kartan!");
}
