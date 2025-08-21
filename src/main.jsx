import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styled/Global";

createRoot(document.getElementById("root")).render(
    <>
        <GlobalStyle />
        <App />
    </>
);
