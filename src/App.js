import { Route, Routes } from "react-router-dom"
  
// Import the pages
import  Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import Over from "./pages/Over.js";
import Contact from "./pages/Contact";
import  Blogs from "./pages/Blogs";
  
// Import css

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/over" element={<Over />} />
      <Route path="/contact" element={<Contact />} />  
      <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
