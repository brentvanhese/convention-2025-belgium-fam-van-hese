import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./_context/ThemeProvider.tsx";
import { BrowserRouter } from "react-router";

import "./_translations/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter basename="/convention-2025-belgium-fam-van-hese">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
