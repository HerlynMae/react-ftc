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
import ChildSponsorshipLogin from "./components/pages/access/ChildSponsorshipLogin";
import ChildSponsorshipCreateAccount from "./components/pages/access/ChildSponsorshipCreateAccount";
import ChildSponsorshipForgotPassword from "./components/pages/access/ChildSponsorshipForgotPassword";
import NonResidentChildInfo from "./components/pages/sponsor/NonResidentChildInfo";
import ResidentChildInfo from "./components/pages/sponsor/ResidentChildInfo";
import DonateInfo from "./components/pages/donation/DonateInfo";

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
          <Route path="/login" element={<ChildSponsorshipLogin />} />
          <Route
            path="/create-password"
            element={<ChildSponsorshipCreateAccount />}
          />
          <Route
            path="/forgot-password"
            element={<ChildSponsorshipForgotPassword />}
          />
          {/* /resident-child-info/john-luke */}
          <Route
            path="/resident-child-info/:residentChildInfoId"
            element={<ResidentChildInfo />}
          />
          <Route
            path="/non-resident-child-info/:nonResidentChildInfoId"
            element={<NonResidentChildInfo />}
          />
          <Route path="/donate-info/:donationInfoId" element={<DonateInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
