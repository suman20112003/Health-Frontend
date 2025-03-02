import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import "./index.css";

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure 'index.html' has <div id='root'></div>");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
