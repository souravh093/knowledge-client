import React from "react";
import Container from "../../components/Container/Container";
import logo from "../../assets/logo.png";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Header = () => {
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
              <MenuItem name={"Colleges"} path={"/collages"} />
              <MenuItem name={"Admission"} path={"/admission"} />
              <MenuItem name={"My Collage"} path={"/mycollage"} />
            </ul>
          </div>
          <div>
            <img src="" alt="" />
            <ul>
              <MenuItem name={"Login"} path={"/login"} />
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
