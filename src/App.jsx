import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Booking from "./pages/Booking";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Nav"
import Footer from './components/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App