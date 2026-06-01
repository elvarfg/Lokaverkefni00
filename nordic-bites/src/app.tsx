import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <ScrollToTop />

      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;