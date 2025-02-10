import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Data from "./components/data/Data";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Data />
  </>
);
