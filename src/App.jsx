import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projekter from "./pages/Projekter";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import Navigation from "./components/Navigation";

//FORSIDE

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projekter" element={<Projekter />} />
          <Route path="/om-mig" element={<OmMig />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
