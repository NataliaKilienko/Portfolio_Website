import React from 'react';
import "./style.css";
import DownloadCVButton from '../../components/downloadCVButton/DownloadCVButton';

const Header = ({ sectionRef }) => {
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nataliia</em>
          </strong>
          <br />а Front-End Engineer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <DownloadCVButton />
        <div className="scroll-button" onClick={scrollToSection}>
          <div className="scroll-indicator">
            <div className="scroll-indicator__circle"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
