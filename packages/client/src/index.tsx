import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>TradeVault Client</h1>
      <p>React 18 + Webpack 5 + Babel is wired up.</p>
    </div>
  );
}

const container = document.getElementById("root");

if (!container) {
  // Fail fast with a clear message (helps catch template / mounting issues)
  throw new Error("Root container '#root' not found. Check src/index.html.");
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
