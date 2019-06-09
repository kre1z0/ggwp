import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import withRouter from "../hoc/withRouter";
import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  state = {
    selectedChannel: null,
  };

  onSelectedChannel = channel => this.setState({ selectedChannel: channel });

  render() {
    const { selectedChannel } = this.state;
    const { children, location, navigate } = this.props;

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Navbar navigate={navigate} location={location} />
        <Main>
          {React.cloneElement(children, {
            onSelectedChannel: this.onSelectedChannel,
            selectedChannel,
          })}
        </Main>
      </>
    );
  }
}

export default withRouter(Layout);
