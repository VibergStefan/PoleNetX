import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ImportPage from "./pages/ImportPage";
import StolparPage from "./pages/StolparPage";
import LastfallPage from "./pages/LastfallPage";
import RapportPage from "./pages/RapportPage";

export type Page = "import" | "stolpar" | "lastfall" | "rapport";

export default function App() {
  const [page, setPage] = useState<Page>("import");
  const [status, setStatus] = useState("Redo");

  return (
    <div className="flex h-screen">
      <Sidebar selected={page} onSelect={setPage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-200 p-3">AvCad WebApp – {page}</header>
        <main className="flex-1 overflow-auto p-4">
          {page === "import" && <ImportPage onStatus={setStatus} />}
          {page === "stolpar" && <StolparPage onStatus={setStatus} />}
          {page === "lastfall" && <LastfallPage onStatus={setStatus} />}
          {page === "rapport" && <RapportPage onStatus={setStatus} />}
        </main>
        <footer className="bg-gray-100 p-2 flex justify-between">
          <span>Status: {status}</span>
          <span>v1.0 — Netlify / GitHub</span>
        </footer>
      </div>
    </div>
  );
}
