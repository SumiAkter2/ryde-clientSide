import { Link } from "react-router-dom";
import "./Button.css";
const SecondaryButton = ({ text }) => {
  return (
    <div>
      <Link to="/coming">
        <button className="button-2 lg:w-fit w-[250px]"> {text}</button>
      </Link>
    </div>
  );
};

export default SecondaryButton;
