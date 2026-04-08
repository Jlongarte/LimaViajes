import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, link, className = "", onClick, type = "button" }) => {
  if (link) {
    return (
      <Link to={link} className={`btn ${className}`} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
