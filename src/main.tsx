import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import ErrorBoundaryFallBack from "@components/ErrorBoundary";
import "@assets/css/normalize.css";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
