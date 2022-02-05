import logo from "./img/logo.png";
import nyt from "./img/nyt.png";

function Footer() {
  return (
    <footer className="footer-container flex text-shadow fs-100">
      <div>
        <a
          href="https://developer.nytimes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nyt} alt="Data provided by The New York Times" />
        </a>
      </div>
      <div className="footer-text">
        <div>Designed & Built by Taha Cini </div>
        <div className="logo-small">
          <img src={logo} alt="My Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
