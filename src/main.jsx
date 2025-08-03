import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Context/AuthContext";
import { JobProvider } from "./Context/JobContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </AuthProvider>
  </StrictMode>
);
