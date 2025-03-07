import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styled/global";

createRoot(document.getElementById("root")).render(
    <>
        <GlobalStyle />
        <App />
    </>
);
