import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignatureMenu from "./components/SignatureMenu";
import OurStory from "./components/OurStory";
import MenuPreview from "./components/MenuPreview";
import Quote from "./components/Quote";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
console.log("NEW MENU COMPONENT IS RUNNING");
function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <SignatureMenu />
      <OurStory />
      <MenuPreview />
      <Quote />
      <VisitUs />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
