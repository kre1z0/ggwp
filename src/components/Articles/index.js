import React, { Component } from "react";

import { Article } from "../Article";
import { rowColumns } from "../../utils/array";
import { isMobile } from "../../utils/browser";
import { Container, Column } from "./styled";

export class Articles extends Component {
  state = {
    columnsCount: 2,
    currentPage: 1,
    columns: [],
    pageCount: 0,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { data, articlesPerPage } = this.props;
    const columnsCount = isMobile() ? 1 : 2;
    const { currentPage } = this.state;
    const allMarkdownRemark = data.allMarkdownRemark;
    // const AllArticles = allMarkdownRemark ? allMarkdownRemark.edges : [];
    const AllArticles = allMarkdownRemark ? allMarkdownRemark : [];

    const articles = this.pagination(currentPage);
    const pageCount = Math.ceil(AllArticles.length / articlesPerPage);
    const columns = rowColumns(articles, columnsCount);

    this.setState({ pageCount, columns, columnsCount });
  };

  pagination = page => {
    const { data, articlesPerPage } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    // const AllArticles = allMarkdownRemark ? allMarkdownRemark.edges : [];
    const AllArticles = allMarkdownRemark ? allMarkdownRemark : [];

    const from = articlesPerPage * (page - 1);
    const to = from + articlesPerPage;

    return AllArticles.slice(from, to);
  };

  onPageChange = currentPage => {
    const { columnsCount } = this.state;

    const items = this.pagination(currentPage);
    const columns = rowColumns(items, columnsCount);

    this.setState({
      currentPage,
      columns,
    });
  };

  render() {
    const { columnsCount, columns, currentPage, pageCount } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;

    return (
      <Container>
        {columns.map((col, index) => (
          <Column key={index} oneColumn={columnsCount === 1}>
            {!allMarkdownRemark && <h2>Список статей пуст</h2>}
            {col.map((article, index) => (
              // todo add key id
              <Article key={index} {...article} />
            ))}
          </Column>
        ))}
      </Container>
    );
  }
}
