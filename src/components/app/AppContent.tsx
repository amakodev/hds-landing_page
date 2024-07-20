import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Hero,
  About,
  Features,
  HowItWorks,
  Community,
  SignUpIncentives,
  NotFound,
} from "../routes";

const AppContent: React.FC = () => {
  return (
    <div className="AppContent">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />

        {/* Navigation Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<SignUpIncentives />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppContent;
