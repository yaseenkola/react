import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemedCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`card mb-3 ${
        theme === "light" ? "text-bg-light" : "text-bg-dark"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">Themed Card</h5>
        <p className="card-text">
          This card changes its style based on the selected theme.
        </p>
      </div>
    </div>
  );
};

export default ThemedCard;
