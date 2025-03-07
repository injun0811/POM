import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Cover from "./pages/Cover";
import POM from "./pages/POM";
import { AppDiv } from "./styled/App";

function App() {
    return (
        <Router>
            <AppDiv>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Cover />} />
                        <Route path="/pom" element={<POM />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </AppDiv>
        </Router>
    );
}

export default App;
