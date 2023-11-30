import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Interviewes from "./pages/Interviewes";
import Lecture from "./pages/Lecture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/interviewes" element={<Interviewes />} />
            <Route path="/lecture" element={<Lecture />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
