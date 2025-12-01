import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/themes.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Innovacion-PostureVibes">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
