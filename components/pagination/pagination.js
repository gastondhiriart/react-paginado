"use client";

import {
  CurrentPageButton,
  NextPageButton,
  PreviousPageButton,
} from "./buttons";

const Pagination = ({ currentPage }) => {
  return (
    <ul className="pagination">
      <PreviousPageButton currentPage={currentPage} />
      <CurrentPageButton currentPage={currentPage} />
      <NextPageButton currentPage={currentPage} />
    </ul>
  );
};

export default Pagination;
