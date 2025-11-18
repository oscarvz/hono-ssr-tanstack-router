import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Home } from "./components";
import { Document } from "./document";
import "./style.css";

hydrateRoot(
  document,
  <StrictMode>
    <Document>
      <Home />
    </Document>
  </StrictMode>,
);
