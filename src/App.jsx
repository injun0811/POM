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
import { Intro, AboutMe, Career } from "./pages/about/index";
import { Guideline, HAB, FCM, VM, SM, ETC } from "./pages/services/index";
import { Background } from "./styled/Global";

function App() {
    return (
        <Router>
            <AppDiv>
                <Header />
                <main>
                    <Background>
                        <Routes>
                            <Route path="/" element={<Cover />} />

                            <Route path="/pom" element={<POM />} />

                            <Route path="/about" element={<About />}>
                                {/* 웹 사이트 소개 */}
                                <Route path="Intro" index element={<Intro />} />
                                {/* 제작자 소개 */}
                                <Route path="AboutMe" element={<AboutMe />} />
                                {/* 개발 이력 */}
                                <Route path="Career" element={<Career />} />
                            </Route>

                            <Route path="/contact" element={<Contact />} />

                            <Route path="/services" element={<Services />}>
                                {/* service (기능)에 대한 간단한 가이드 */}
                                <Route path="guideline" element={<Guideline />} />
                                {/* 가계부 household account book */}
                                <Route path="HAB" element={<HAB />} />
                                {/* 식비 관리 food cost management */}
                                <Route path="FCM" element={<FCM />} />
                                {/* 휴가 관리 vacation management */}
                                <Route path="VM" element={<VM />} />
                                {/* 일정 관리 schedule management */}
                                <Route path="SM" element={<SM />} />
                                {/* 소규모 기능 ETC */}
                                <Route path="ETC" element={<ETC />} />
                            </Route>

                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/admin" element={<Admin />} />
                        </Routes>
                    </Background>
                </main>
                <Footer />
            </AppDiv>
        </Router>
    );
}

export default App;
