import React from "react";

import menu from "../../routes";
import withRouter from "../../hoc/withRouter";
import { Home as HomeIcon } from "../../components/Icons/Home";
import { Nav, Home, Ul, Li, DefaultLink, activeStyle } from "./styled";

export const NavbarBase = () => {
  return (
    <Nav>
      <Home to="/" activeStyle={activeStyle}>
        <HomeIcon />
      </Home>
      <Ul>
        {menu.map(({ name, to }) => (
          <Li key={name}>
            <DefaultLink to={to} activeStyle={activeStyle}>
              {name}
            </DefaultLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export const Navbar = withRouter(NavbarBase);
