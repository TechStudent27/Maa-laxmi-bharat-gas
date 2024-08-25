import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import CardHome from "./components/CardHome";
import { Stove, SteelStove, Glasstop } from "./Products/Stove/Stove";
import {
  Regulator,
  NormalRegulator,
  PressureRegulator,
} from "./Products/Regulator/Regulator";
import Pipe from "./Products/GasPipe/Pipe";
import { Lighter, NormalLigher, FireLighter } from "./Products/Lighter/Lighter";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CardHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stove" element={<Stove />} />
          <Route path="/steelstove" element={<SteelStove />} />
          <Route path="/glasstop" element={<Glasstop />} />
          <Route path="/regulator" element={<Regulator />} />
          <Route path="/normalregulator" element={<NormalRegulator />} />
          <Route path="/pressureregulator" element={<PressureRegulator />} />
          <Route path="/pipe" element={<Pipe />} />
          <Route path="/lighter" element={<Lighter />} />
          <Route path="/normallighter" element={<NormalLigher />} />
          <Route path="/firelighter" element={<FireLighter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
