import React, { Component } from "react";

import { ArticlePreview } from "../ArticlePreview";
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
    const AllArticles = data ? data : [];

    const articles = this.pagination(currentPage);
    const pageCount = Math.ceil(AllArticles.length / articlesPerPage);
    const columns = rowColumns(articles, columnsCount);

    this.setState({ pageCount, columns, columnsCount });
  };

  pagination = page => {
    const { data, articlesPerPage } = this.props;
    const AllArticles = data ? data : [];

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

    return (
      <Container>
        {columns.map((col, index) => (
          <Column key={index} oneColumn={columnsCount === 1}>
            {!data && <h2>Список статей пуст</h2>}
            {col.map((article, index) => (
              // todo add key id
              <ArticlePreview key={index} {...article} />
            ))}
          </Column>
        ))}
      </Container>
    );
  }
}
