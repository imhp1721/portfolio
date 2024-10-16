import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projekter from "./pages/Projekter";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";

//FORSIDE

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/projekter" element={<Projekter />} />
          <Route path="/om-mig" element={<OmMig />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
