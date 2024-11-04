import React from 'react';
import "./style.css";

const DownloadCVButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/CV.pdf`;
        link.download = 'Nataliia_Kiliienko_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
  return (
    <div className="download-cv-button-wrapper">
      <button className="download-cv-button" onClick={handleDownload}>
        Download CV
      </button>
    </div>
  );
};

export default DownloadCVButton;
