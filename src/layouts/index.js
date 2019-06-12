import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
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
      <StaticQuery
        query={graphql`
          {
            articles: allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: [DESC] }
              filter: { frontmatter: { templateKey: { eq: "article" } } }
            ) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    templateKey
                    title
                    description
                    preview
                    tags
                    date
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Normalize />
              <GlobalStyle fullHeight={fullHeight} />
              <Navbar navigate={navigate} location={location} />
              <Main fullHeight={fullHeight}>
                {React.cloneElement(children, {
                  ...data,
                })}
              </Main>
            </>
          );
        }}
      />
    );
  }
}

export default withRouter(Layout);
