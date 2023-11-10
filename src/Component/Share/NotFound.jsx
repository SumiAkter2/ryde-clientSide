import { Link } from "react-router-dom";
import comingImg from "../../assets/notFound/giphy.gif";
import SecondaryButton from "../Share/Button/SecondaryButton";
const NotFound = () => {
  return (
    <div>
      <div>
        <div className=" pt-20 flex justify-center items-center ">
          <img src={comingImg} alt="coming-soon-gif" />
        </div>
        <div className=" flex justify-center items-center pb-12">
          <Link to="/">
            {" "}
            <SecondaryButton text="Go Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
