import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Cover from "./pages/Cover";
import POM from "./pages/POM";
import { AppDiv } from "./styled/App";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Admin from "./pages/user/Admin";

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
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />

                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </AppDiv>
        </Router>
    );
}

export default App;
