import React from 'react';
import "./style.css";

const DownloadCVButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf'; 
        link.download = 'Nataliia_Kiliienko_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
  return (
    <button className="download-cv-button" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadCVButton;
