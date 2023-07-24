import React, { useContext, useState } from "react";
import Container from "../../components/Container/Container";
import logo from "../../assets/logo.png";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div className="py-2 bg-[#B4BEC9] relative">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-16" src={logo} alt="" />
            <h2 className="uppercase text-lg md:text-2xl lg:text-3xl font-bold">
              knowledge door
            </h2>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <MenuItem name={"Home"} path={"/"} />
              <MenuItem name={"Colleges"} path={"/colleges"} />
              <MenuItem name={"Admission"} path={"/admission"} />
              <MenuItem name={"My Collage"} path={"/mycollage"} />
            </ul>
          </div>

          <div className="hidden lg:block">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/profile"
                  className="hover:text-gray-800 cursor-pointer"
                >
                  {user?.displayName}
                </Link>
                <ul>
                  <button
                    onClick={handleLogout}
                    className="bg-[#159A9C] text-white py-2 px-5 rounded-md hover:text-gray-200"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            ) : (
              <Link
                className="bg-[#159A9C]  text-white py-2 px-5 rounded-md hover:text-gray-200"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>

          <button className="lg:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <FaAlignJustify className="text-2xl" />
            )}
          </button>
        </nav>
      </Container>

      {toggle && (
        <div className="absolute lg:hidden right-0 top-16 transition-all duration-300 bg-[#B4BEC9] border shadow-md px-10 py-3">
          <div className="flex flex-col">
            <div className=" lg:hidden">
              <ul className="flex flex-col ga-5">
                <MenuItem name={"Home"} path={"/"} />
                <MenuItem name={"Colleges"} path={"/colleges"} />
                <MenuItem name={"Admission"} path={"/admission"} />
                <MenuItem name={"My Collage"} path={"/mycollage"} />
              </ul>
            </div>

            <div className="lg:hidden mt-5">
              {user ? (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/profile"
                    className="hover:text-gray-800 cursor-pointer"
                  >
                    {user?.displayName}
                  </Link>
                  <ul>
                    <button
                      onClick={handleLogout}
                      className="bg-[#159A9C] text-white py-2 px-5 rounded-md hover:text-gray-200"
                    >
                      Logout
                    </button>
                  </ul>
                </div>
              ) : (
                <Link
                  className="bg-[#159A9C]  text-white py-2 px-5 rounded-md hover:text-gray-200"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
