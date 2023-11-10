import { Link } from "react-router-dom";
import "./Button.css";
const PrimaryButton = ({ text }) => {
  return (
    <div>
      <Link to="/coming">
        <button className="button lg:w-fit w-[300px]"> {text}</button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
