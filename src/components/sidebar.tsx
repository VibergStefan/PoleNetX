import jsPDF from "jspdf";

export default function generatePDF(poles) {
  const doc = new jsPDF();
  const date = new Date().toLocaleDateString();
  doc.setFontSize(16);
  doc.text("Projektrapport – PoleNetX", 20, 30);
  doc.setFontSize(12);
  doc.text(`Datum: ${date}`, 20, 40);
  doc.text(`Standard: SS-EN 50341-2-18`, 20, 50);
  doc.addPage();
  poles.forEach((p, i) => {
    doc.text(`Stolpe ${i + 1}: X=${p.x.toFixed(2)} Y=${p.y.toFixed(2)} Z=${p.z.toFixed(2)}`, 20, 30 + i * 8);
  });
  doc.save("PoleNetX_rapport.pdf");
}
