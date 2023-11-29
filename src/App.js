import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/filter" element={<Filter />} />
              <Route path="/graphs" element={<Graphs />} />
              <Route path="/providersRank" element={<ProvidersRank />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
