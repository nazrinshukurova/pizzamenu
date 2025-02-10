import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Menu  />
  </>
);
