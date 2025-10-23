const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  return (
    <ul className="pagination">
      {Array.from({ length: pageCount }, (_, i) => {
        const page = i + 1;
        return (
          <li
            key={`page-${page}`}
            className={`page-number ${currentPage === page ? "active" : ""}`}
            aria-label={`Go to page ${page}`}
            onClick={() => onPageChange(page)}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") onPageChange(page);
            }}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
