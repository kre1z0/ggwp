import React, { Component } from "react";

import { Tags } from "../../components/Tags";
import { ArticlePreview } from "../ArticlePreview";
import { rowColumns } from "../../utils/array";
import { isMobile } from "../../utils/browser";
import { Container, Column, PaginationFull, PaginationSimple } from "./styled";

export class Articles extends Component {
  state = {
    columnsCount: 2,
    currentPage: 1,
    columns: [],
    pageCount: 0,
    tags: [],
    disabledTag: null,
  };

  componentDidMount() {
    this.setPagination(null);
    this.setTags();
  }

  setTags = () => {
    const { data } = this.props;

    let tags = new Set();

    for (let i = 0; i < data.length; i++) {
      (data[i].tags || []).forEach(a => tags.add(a));
    }

    this.setState({ tags: Array.from(tags) });
  };

  setPagination = disabledTag => {
    const { data, articlesPerPage } = this.props;
    const columnsCount = isMobile() ? 1 : 2;
    const { currentPage } = this.state;

    const AllArticles = data
      ? data.filter(({ tags }) => disabledTag === null || tags.includes(disabledTag))
      : [];

    const articles = this.pagination(currentPage, AllArticles, disabledTag);
    const pageCount = Math.ceil(AllArticles.length / articlesPerPage);
    const columns = rowColumns(articles, columnsCount);

    this.setState({ pageCount, columns, columnsCount });
  };

  pagination = (page, AllArticles) => {
    const { articlesPerPage } = this.props;

    const from = articlesPerPage * (page - 1);
    const to = from + articlesPerPage;

    return AllArticles.slice(from, to);
  };

  onPageChange = currentPage => {
    const { data } = this.props;
    const { columnsCount, disabledTag } = this.state;

    const AllArticles = data
      ? data.filter(({ tags }) => disabledTag === null || tags.includes(disabledTag))
      : [];
    const items = this.pagination(currentPage, AllArticles);
    const columns = rowColumns(items, columnsCount);

    this.setState({
      currentPage,
      columns,
    });
  };

  onTagClick = tag => {
    const { disabledTag } = this.state;

    if (disabledTag === tag) {
      this.setState({ disabledTag: null });
      this.setPagination(null);
    } else {
      this.setState({ disabledTag: tag });
      this.setPagination(tag);
    }
  };

  render() {
    const { columnsCount, columns, currentPage, pageCount, tags, disabledTag } = this.state;
    const { data } = this.props;

    return (
      <Container>
        <Tags tags={tags} onClick={this.onTagClick} disabledTag={disabledTag} />
        {columns.map((col, index) => (
          <Column key={index} oneColumn={columnsCount === 1}>
            {!data && <h2>Список статей пуст</h2>}
            {col.map(article => (
              <ArticlePreview key={article.id} {...article} />
            ))}
          </Column>
        ))}
        {pageCount > 1 && (
          <>
            <PaginationFull
              currentPage={currentPage}
              pageCount={pageCount}
              slots={7}
              onPageChange={this.onPageChange}
            />
            <PaginationSimple
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={this.onPageChange}
            />
          </>
        )}
      </Container>
    );
  }
}
