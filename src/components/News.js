import { useState, useEffect } from "react";
import { fetchNews } from "./api/Api.js";
import NewsBox from "./NewsBox.js";
import Pagination from "./Pagination.js";
import { useParams } from "react-router-dom";

function News({ category, setCategory, currentPage, setCurrentPage }) {
  const [news, setNews] = useState([]);
  const [newsPerPage] = useState(6);
  const { page, cate } = useParams();

  // Fetch Data

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchNews(category, setNews);
    }, 250);
    return () => clearTimeout(timeout);
  }, [category]);

  // Current News

  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);

  // Pagination

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change Page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Change Page Through URL
  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
    if (cate) {
      setCategory(cate);
    }
  }, [page, cate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="section-container stick">
      <div className="news-container">
        {currentNews.map((el, index) => (
          <NewsBox
            key={index}
            title={el.title}
            abstract={el.abstract}
            image={el.multimedia ? el.multimedia[0] : []}
            url={el.url}
            by={el.byline}
          />
        ))}
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        category={category}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}

export default News;
