import { useState, useEffect } from "react";
import { fetchNews } from "./api/Api.js";
import NewsBox from "./NewsBox.js";

function News() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("world");

  useEffect(() => {
    fetchNews(category, setNews);
  }, [category]);

  return (
    <section className="section-container">
      {news.map((el, index) => (
        <NewsBox
          key={index}
          title={el.title}
          abstract={el.abstract}
          image={el.multimedia[0]}
          url={el.url}
        />
      ))}
    </section>
  );
}

export default News;
