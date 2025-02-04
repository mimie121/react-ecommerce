// 
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Service/Service"; 
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import Cart from "./pages/Cart/Cart";
import PlayOrder from "./components/PlaceOrder/PlayOrder";

const App = () => {

  const [showLogin,setShowLogin]= useState(false)
  return (
    
      <>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app-section">
        <Navbar setShowLogin ={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlayOrder" element={<PlayOrder/>} />
        </Routes>
      </div>
    <Footer />
    </>
  );
};

export default App;
