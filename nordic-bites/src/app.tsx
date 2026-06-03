import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Fara beint í efni
      </a>

      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;
