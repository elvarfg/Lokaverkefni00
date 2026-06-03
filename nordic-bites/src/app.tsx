import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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

      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
