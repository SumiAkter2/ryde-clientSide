import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const navItem = (
    <>
      <li className="hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-white">
        <Link to="/">Services</Link>
      </li>
      <li className="hover:text-white">
        <Link to="/">Investment</Link>
      </li>

      <li className="hover:text-white">
        <Link to="/">About</Link>
      </li>
      <li className="hover:text-white">
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className=" flex justify-between items-center relative">
        <div id="pointer" className="bg-success lg:w-[400px] w-[150px]">
          <p className="text-primary font-bold flex justify-center  items-center py-1 text-sm lg:text-xl ">
            <BsFillTelephoneFill className="mr-3" /> Call for Reserve{" "}
          </p>
        </div>
        <div className="text-black font-bold flex flex-1 justify-end   items-center  bg-secondary lg:mr-12 mr-2">
          <p className="text-primary font-bold flex justify-center  items-center py-2 mr-4">
            <RiLoginCircleLine className="mr-1" /> LOGIN
          </p>
          <p className="text-primary font-bold flex justify-center  items-center py-2">
            <FaRegUserCircle className="mr-1" /> SIGN UP
          </p>
        </div>
      </div>
      <div className="navbar bg-primary px-6 font-semibold">
        <div className="navbar-start">
          {/* menu drawer */}
          <div className="drawer lg:hidden ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <HiMenuAlt1 size="30px" color="#ec3323" />
              </label>
            </div>
            <div className="drawer-side z-50 ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu w-[300px] min-h-full bg-slate-300 text-black ">
                {navItem}
              </ul>
              <div className=" lg:hidden pl-5 absolute top-[190px] ">
                <p className="text-primary text-sm flex justify-center  items-center py-2 mr-4">
                  <RiLoginCircleLine className="mr-1" /> LOGIN
                </p>
                <p className="text-primary text-sm flex justify-center  items-center py-2">
                  <FaRegUserCircle className="mr-1" /> SIGN UP
                </p>
              </div>
            </div>
          </div>
          <Link to="/" className=" font-bold text-sm ">
            <img src={logo} alt="logo" className="w-32" />
          </Link>
          <ul className="menu lg:menu-horizontal  hidden px-1 ml-12 text-secondary w-full">
            {navItem}
          </ul>
        </div>

        {/* menu */}

        <div className="navbar-end   ">
          <input
            type="text"
            placeholder="Search"
            className="input lg:flex hidden input-success rounded-full   max-w-xs mr-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
