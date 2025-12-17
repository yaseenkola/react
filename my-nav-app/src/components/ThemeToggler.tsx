import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn btn-primary mb-3" onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeToggler;
