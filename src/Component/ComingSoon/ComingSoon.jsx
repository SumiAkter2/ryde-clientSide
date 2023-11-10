import { Link } from "react-router-dom";
import comingImg from "../../assets/notFound/coming soon.gif";
import SecondaryButton from "../Share/Button/SecondaryButton";

const ComingSoon = () => {
  return (
    <div>
      <div className=" pt-12 flex justify-center items-center ">
        <img src={comingImg} alt="coming-soon-gif" />
      </div>
      <div className=" flex justify-center items-center pb-12">
        <Link to="/">
          {" "}
          <SecondaryButton text="Go Home" />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
