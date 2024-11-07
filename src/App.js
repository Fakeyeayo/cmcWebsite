import "./App.css";
import Header from "./compnents/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Giving from "./pages/Giving";
import Gallery from "./pages/Gallery/Gallery";
import CarouselTest from "./pages/CarouselTest";
import Footer from "./compnents/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
