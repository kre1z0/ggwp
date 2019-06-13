import React, { Component } from "react";

import { Arrow } from "../../../components/Icons/Arrow";
import { Container, PrevBtn, NextBtn, Amount } from "./styled";

export class PaginationSimple extends Component {
  shouldComponentUpdate({ currentPage: nextCurrentPage, pageCount: nextPageCount }) {
    const { currentPage, pageCount } = this.props;

    return currentPage !== nextCurrentPage || pageCount !== nextPageCount;
  }

  render() {
    const { pageCount, currentPage, className, onPageChange } = this.props;

    return (
      <Container className={className}>
        <PrevBtn onClick={e => onPageChange(currentPage - 1, e)} disabled={currentPage === 1}>
          <Arrow />
        </PrevBtn>
        <Amount>{`${currentPage} / ${pageCount}`}</Amount>
        <NextBtn
          onClick={e => onPageChange(currentPage + 1, e)}
          disabled={currentPage === pageCount}
        >
          <Arrow />
        </NextBtn>
      </Container>
    );
  }
}
