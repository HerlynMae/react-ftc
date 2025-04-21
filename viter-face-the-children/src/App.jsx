import React from "react";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Faq from "./components/pages/faq/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import Contact from "./components/pages/contact/Contact";
import Sponsor from "./components/pages/sponsor/Sponsor";
import Donation from "./components/pages/donation/Donation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
