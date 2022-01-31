import { Link } from "react-router-dom";

function NewsBox({ title, abstract, url, image }) {
  return (
    <div>
      <div className="flex">
        {image ? (
          <div className="news-img">
            <img src={image.url} alt={image.caption} />
          </div>
        ) : (
          <></>
        )}
        <h2>{title}</h2>
      </div>
      <div>
        <p>{abstract}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Whole Story
        </a>
      </div>
    </div>
  );
}

export default NewsBox;
