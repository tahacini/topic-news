import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Pagination({
  pageNumbers,
  paginate,
  category,
  setCurrentPage,
  currentPage,
}) {
  const [page, setPage] = useState([]);
  const curr = parseInt(currentPage);

  useEffect(() => {
    setPage(pageNumbers);
    pagi();
  }, [pageNumbers, currentPage, category]);

  const pagi = () => {
    if (curr < 3 && pageNumbers[pageNumbers.length - 1] >= 5) {
      setPage((pa) => pa.slice(0, 5));
    } else if (curr >= 3 && pageNumbers[pageNumbers.length - 1] >= curr + 2) {
      setPage((pa) => pa.slice(curr - 3, curr + 2));
    }
    if (
      pageNumbers[pageNumbers.length - 1] >= 5 &&
      curr + 2 >= pageNumbers[pageNumbers.length - 1]
    ) {
      setPage((pa) => pa.slice(-5));
    }
  };

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
            className="story"
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
