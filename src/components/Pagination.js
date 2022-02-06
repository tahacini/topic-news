import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomPagination from "./CustomPagination";

function Pagination({
  pageNumbers,
  paginate,
  category,
  setCurrentPage,
  currentPage,
}) {
  const [page, setPage] = useState([]);
  const current = parseInt(currentPage);

  useEffect(() => {
    setPage(pageNumbers);
    CustomPagination(current, pageNumbers, setPage);
    window.scrollTo({ top: "0px" });
  }, [pageNumbers, current, category]);

  const handleInc = () => {
    if (currentPage >= pageNumbers[pageNumbers.length - 1]) {
      return;
    }
    setCurrentPage((p) => p++);
  };

  const handleDec = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage((p) => --p);
  };

  return (
    <nav>
      <div className="flex pagination text-shadow fs-200">
        <Link
          to={`${category}/${currentPage > 2 ? currentPage - 1 : 1}`}
          onClick={() => handleDec()}
        >
          <i className="fas fa-angle-left fa-lg story"></i>
        </Link>
        {page.map((number) => (
          <Link
            to={`${category}/${number}`}
            onClick={() => paginate(number)}
            key={number}
            className={current === number ? "active-story" : "story"}
          >
            {number}
          </Link>
        ))}
        <Link
          to={`${category}/${
            currentPage < pageNumbers[pageNumbers.length - 1]
              ? pageNumbers[currentPage]
              : pageNumbers[pageNumbers.length - 1]
          }`}
          onClick={() => handleInc()}
        >
          <i className="fas fa-angle-right fa-lg story"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Pagination;
