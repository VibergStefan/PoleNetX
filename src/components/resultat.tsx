import React from "react";

export function Resultat({ data }: { data: any }) {
  return (
    <div className="bg-green-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold">Resultat:</h2>
      <ul className="list-disc pl-5">
        <li>Vind: {data.vind} m/s</li>
        <li>Is: {data.is} mm</li>
        <li>Temperatur: {data.temp} °C</li>
        <li><strong>Total last: {data.kraft.toFixed(2)} N</strong></li>
      </ul>
    </div>
  );
}
