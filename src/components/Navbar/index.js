import React from "react";

import color from "../../styles/colors";
import menu from "../../routes";
import withRouter from "../../hoc/withRouter";
import { Nav, Container, Home, Ul, Li, DefaultLink } from "./styled";

export const NavbarBase = () => {
  return (
    <Nav>
      <Container>
        <Home to="/">Home</Home>
        <Ul>
          {menu.map(({ name }) => (
            <Li key={name}>
              <DefaultLink to={`/${name}`} activeStyle={{ color: color.green }}>
                {name}
              </DefaultLink>
            </Li>
          ))}
        </Ul>
      </Container>
    </Nav>
  );
};

export const Navbar = withRouter(NavbarBase);
