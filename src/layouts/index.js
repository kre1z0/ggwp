import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import withRouter from "../hoc/withRouter";
import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children, location, isMapPage, navigate } = this.props;
    const fullHeight = isMapPage();

    return (
      <>
        <Normalize />
        <GlobalStyle fullHeight={fullHeight} />
        <Navbar navigate={navigate} location={location} />
        <Main fullHeight={fullHeight}>{children}</Main>
      </>
    );
  }
}

export default withRouter(Layout);
