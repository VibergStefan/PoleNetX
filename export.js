import jsPDF from "jspdf";

export default function generatePDF(poles) {
  const doc = new jsPDF();
  const date = new Date().toLocaleDateString();

  doc.setFontSize(16);
  doc.text("Projektrapport – PoleNetX", 20, 30);
  doc.setFontSize(12);
  doc.text(`Projekt: Luftledning Vetlanda`, 20, 40);
  doc.text(`Datum: ${date}`, 20, 48);
  doc.text(`Standard: SS-EN 50341-2-18`, 20, 56);
  doc.addPage();

  doc.setFontSize(14);
  doc.text("Stolpar", 20, 20);
  doc.setFontSize(10);

  poles.forEach((p, i) => {
    doc.text(
      `Stolpe ${i + 1}: X=${p.x.toFixed(2)} Y=${p.y.toFixed(2)} Z=${p.z.toFixed(2)}`,
      20,
      30 + i * 8
    );
  });

  const y = 30 + poles.length * 8 + 20;
  doc.text("_________________________", 20, y);
  doc.text("Projektörens signatur", 20, y + 6);

  doc.save("PoleNetX_rapport.pdf");
}
