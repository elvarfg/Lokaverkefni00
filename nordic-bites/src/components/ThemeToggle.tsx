type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;