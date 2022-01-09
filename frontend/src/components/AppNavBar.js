/** @format */

import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        Home
      </NavbarBrand>
    </Navbar>
  );
};

export default AppNavBar;
