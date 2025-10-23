import { useState } from "react";

const usePagination = (items) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ELEMENTS_PER_PAGE = 6;
  const pageCount = Math.ceil(items.length / ELEMENTS_PER_PAGE);

  return { currentPage, setCurrentPage, pageCount, ELEMENTS_PER_PAGE };
};
export default usePagination;
