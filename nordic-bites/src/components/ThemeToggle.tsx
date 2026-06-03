type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={
        isDarkMode ? "Skipta yfir í ljósan ham" : "Skipta yfir í dökkan ham"
      }
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
