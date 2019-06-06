import React, { Component } from "react";

export default function(CustomComponent) {
  return class extends Component {
    isHomePage = () => this.props.location.pathname === "/";

    render() {
      return (
        <CustomComponent
          isHomePage={this.isHomePage}
          {...this.props}
        />
      );
    }
  };
}
