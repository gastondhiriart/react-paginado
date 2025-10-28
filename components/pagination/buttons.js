const { pageCount } = require("@/utils/data");

import Link from "next/link";

const PreviousPageButton = ({ currentPage }) => (
  <li>
    <Link
      href={`/posts/${Math.max(1, currentPage - 1)}`}
      aria-disabled={currentPage === 1}
      className={`page-nav ${currentPage === 1 ? "disabled" : ""}`}
    >
      ‹
    </Link>
  </li>
);

const NextPageButton = ({ currentPage }) => (
  <li>
    <Link
      href={`/posts/${Math.min(pageCount, currentPage + 1)}`}
      aria-disabled={currentPage === pageCount}
      className={`page-nav ${currentPage === pageCount ? "disabled" : ""}`}
    >
      ›
    </Link>
  </li>
);

const CurrentPageButton = ({ currentPage }) => {
  return (
    <>
      {Array.from({ length: pageCount }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <li key={`page-${page}`}>
            <Link
              href={`/posts/${page}`}
              aria-current={isActive ? "page" : undefined}
              className={`page-number ${isActive ? "active" : ""}`}
              prefetch
            >
              {page}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export { CurrentPageButton, NextPageButton, PreviousPageButton };
