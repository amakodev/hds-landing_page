import React from "react";
import { AppHeader, AppContent, AppFooter } from "./components/app";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
};

export default App;
