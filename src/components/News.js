import { useState, useEffect } from "react";
import { fetchNews } from "./api/Api.js";
import NewsBox from "./NewsBox.js";
import Pagination from "./Pagination.js";
import { useParams } from "react-router-dom";

function News({ category, setCategory, currentPage, setCurrentPage }) {
  const [news, setNews] = useState([]);
  const [newsPerPage] = useState(6);
  const { page, cate } = useParams();

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
  }, []);

  return (
    <section className="section-container">
      {currentNews.map((el, index) => (
        <NewsBox
          key={index}
          title={el.title}
          abstract={el.abstract}
          image={el.multimedia ? el.multimedia[0] : []}
          url={el.url}
        />
      ))}
      <Pagination
        newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate}
        category={category}
      />
    </section>
  );
}

export default News;
