import { Link } from "react-router-dom";

function Pagination({ newsPerPage, totalNews, paginate, category }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="flex pagination text-shadow fs-200">
        <i className="fas fa-angle-left fa-lg story"></i>
        {pageNumbers.map((number) => (
          <Link
            to={`${category}/${number}`}
            onClick={() => paginate(number)}
            key={number}
            className="story"
          >
            {number}
          </Link>
        ))}
        <i className="fas fa-angle-right fa-lg story"></i>
      </div>
    </nav>
  );
}

export default Pagination;
