import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../../public/mt-high-resolution-logo-white-transparent.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} height="50rem" alt="Mace Tattoo logo" style={{ marginRight: "2rem", marginTop: "1rem", marginBottom: "1rem"}} />
        </div>
        <div>
          <ul className="social-icons list-inline mb-0">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/mace.tattoo/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{color: "#FAC800", height: "2rem", marginLeft: "2rem", marginRight: "0.5rem", marginTop: "1rem", marginBottom: "1rem"}}/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/mason.harding.7773/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{color: "#FAC800", height: "2rem", marginLeft: "0.5rem", marginRight: "2rem", marginTop: "1rem", marginBottom: "1rem"}} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
