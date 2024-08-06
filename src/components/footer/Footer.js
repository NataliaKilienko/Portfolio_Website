import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/_desu_desu_">
                <img src={instagram} alt="Instagram" className="icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://x.com/SadDemon0">
                <img src={twitter} alt="Twitter" className="icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/NataliaKilienko">
                <img src={gitHub} alt="GitHub" className="icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/nataliia-kiliienko-bb2878302">
                <img src={linkedIn} alt="LinkedIn" className="icon" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Copyright. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
