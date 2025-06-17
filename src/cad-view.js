export default function initCAD() {
  const canvas = document.getElementById("cadCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth - 40;
  canvas.height = window.innerHeight - 120;

  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
