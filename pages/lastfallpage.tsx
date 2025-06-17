import React, { useState } from "react";
import { LastfallForm } from "../components/LastfallForm";
import { Resultat } from "../components/Resultat";

export default function LastfallPage({ onStatus }: { onStatus: (s: string) => void }) {
  const [resultat, setResultat] = useState(null);

  return (
    <div>
      <h3 className="text-2xl mb-4">Lastfallsberäkning</h3>
      <LastfallForm onSubmit={(data) => { setResultat(data); onStatus("Beräkning klar"); }} />
      {resultat && <Resultat data={resultat} />}
    </div>
  );
}
