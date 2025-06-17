import React, { useState } from "react";

export function LastfallForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [vind, setVind] = useState(30);
  const [is, setIs] = useState(10);
  const [temp, setTemp] = useState(-10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const kraft = 0.613 * vind * vind + is * 5 - temp * 0.5;
    onSubmit({ vind, is, temp, kraft });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-4 rounded shadow">
      <label>
        Vindhastighet (m/s):
        <input type="number" value={vind} onChange={(e) => setVind(+e.target.value)} className="input" />
      </label>
      <label>
        Isbeläggning (mm):
        <input type="number" value={is} onChange={(e) => setIs(+e.target.value)} className="input" />
      </label>
      <label>
        Temperatur (°C):
        <input type="number" value={temp} onChange={(e) => setTemp(+e.target.value)} className="input" />
      </label>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Beräkna last</button>
    </form>
  );
}
