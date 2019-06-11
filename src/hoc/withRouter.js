import React, { Component } from "react";

export default function(CustomComponent) {
  return class extends Component {
    isHomePage = () => this.props.location.pathname === "/";

    isMapPage = () => this.props.location.pathname.startsWith("/map");

    render() {
      return (
        <CustomComponent isHomePage={this.isHomePage} isMapPage={this.isMapPage} {...this.props} />
      );
    }
  };
}
