import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import withRouter from "../hoc/withRouter";
import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children, location, navigate } = this.props;

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Navbar navigate={navigate} location={location} />
        <Main>{children}</Main>
      </>
    );
  }
}

export default withRouter(Layout);
