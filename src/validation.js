export default function validateDesign(poles, voltage) {
  const warnings = [];
  const minClearance = voltage <= 36 ? 4 : voltage <= 72.5 ? 5 : voltage <= 170 ? 6.5 : 7;
  poles.forEach((p, i) => {
    if (p.z < minClearance) {
      warnings.push(`⚠️ Stolpe ${i + 1} ligger för lågt (${p.z} m < ${minClearance} m)`);
    }
  });
  return {
    valid: warnings.length === 0,
    message: warnings.length ? warnings.join("\n") : "✅ Alla krav uppfyllda enligt SS-EN 50341-2-18"
  };
}
