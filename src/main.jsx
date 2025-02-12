import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Data from "./components/data/Data";
import Footer from "./components/Footer/Footer";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
