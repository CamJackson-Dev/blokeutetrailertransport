import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">BUTT</h1>
                <p className="footer-text">
                  Your Goods, Our BUTT – Let's Move!
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Navigation</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">Djtonkinremovals@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">0438 483 414</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/Blokeutetrailertransport"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
      {/* New "Website By" Section */}
      <div className="website-by">
        Website By:{" "}
        <a
          href="https://townsvillewebsites.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/logo.png" alt="Company Logo" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
