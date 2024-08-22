import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MouseFollower } from "react-mouse-follower";
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MouseFollower></MouseFollower>
    <SpeedInsights />
    <App />
  </StrictMode>
);
