import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`back-to-top ${isVisible ? "back-to-top-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Fara efst á síðu"
    >
      ↑
    </button>
  );
}

export default BackToTop;
