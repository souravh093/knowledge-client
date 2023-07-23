import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import logo from "../../assets/logo.png";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);   

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <div className="py-2 bg-[#B4BEC9]">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-16" src={logo} alt="" />
            <h2 className="uppercase text-3xl font-bold">knowledge door</h2>
          </Link>
          <div>
            <ul className="flex items-center gap-10">
              <MenuItem name={"Home"} path={"/"} />
              <MenuItem name={"Colleges"} path={"/colleges"} />
              <MenuItem name={"Admission"} path={"/admission"} />
              <MenuItem name={"My Collage"} path={"/mycollage"} />
            </ul>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="hover:text-gray-800 cursor-pointer">{user?.displayName}</Link>
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
        </nav>
      </Container>
    </div>
  );
};

export default Header;
