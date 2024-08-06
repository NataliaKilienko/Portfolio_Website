import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="GitHub_icon" className="btn-outline__icon" />
      <span>GitHub repo</span>
    </a>
  );
};

export default BtnGitHub;
