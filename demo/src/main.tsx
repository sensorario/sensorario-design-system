import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./demo.css";
import "@design-system/style/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
