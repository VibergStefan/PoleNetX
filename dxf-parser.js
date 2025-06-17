export default function parseDXF(content) {
  const points = [];
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "VERTEX") {
      const x = parseFloat(lines[i + 2]?.trim());
      const y = parseFloat(lines[i + 4]?.trim());
      const z = parseFloat(lines[i + 6]?.trim());
      if (!isNaN(x) && !isNaN(y)) {
        points.push({ x, y, z });
      }
    }
  }
  return points;
}
