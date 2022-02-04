import { Link } from "react-router-dom";
import nytsmall from "./img/nytsmall.png";

function NewsBox({ title, abstract, url, image, by }) {
  return (
    <article className="article-container section-margin">
      <div className="news-img center">
        <img src={image.url} alt={image.caption} />
      </div>
      <div>
        <h2 className="text-shadow fs-400">{title}</h2>
        <div>
          <div className="fs-50 byline text-shadow">{by}</div>
          <p className="text-shadow fs-150">{abstract}</p>
          <div className="whole text-shadow">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="story fs-100">Whole Story</span>
              <img src={nytsmall} alt="NYT" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsBox;
