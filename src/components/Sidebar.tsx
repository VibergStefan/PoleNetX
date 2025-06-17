import React from "react";
import { Page } from "../App";

export default function Sidebar({ selected, onSelect }: { selected: Page; onSelect: (p: Page) => void }) {
  const pages: { id: Page; title: string }[] = [
    { id: "import", title: "Import" },
    { id: "stolpar", title: "Stolpar" },
    { id: "lastfall", title: "Lastfall" },
    { id: "rapport", title: "Rapport" },
  ];
  return (
    <aside className="w-48 bg-gray-800 text-white flex flex-col">
      <h2 className="text-xl p-4">AvCad</h2>
      {pages.map((p) => (
        <button
          key={p.id}
          className={`p-3 text-left hover:bg-gray-700 ${selected === p.id ? "bg-gray-700" : ""}`}
          onClick={() => onSelect(p.id)}
        >
          {p.title}
        </button>
      ))}
    </aside>
  );
}
