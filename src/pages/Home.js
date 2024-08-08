import React, { useRef, useEffect } from "react";
import Header from "./../components/header/Header";
import StarsCanvas from "./../components/canvas/StarsCanvas";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaGitAlt,
  FaBug,
  FaGlobe,
  FaCode,
  FaTools,
  FaNodeJs,
  FaNetworkWired,
  FaDesktop,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";

const skills = [
  {
    name: "HTML5 & CSS3/SCSS",
    description: "Proficient in crafting well-structured and styled web pages.",
    icon: FaHtml5,
  },
  {
    name: "JavaScript(ES6+) & React",
    description: "Strong knowledge with a focus on dynamic user interfaces.",
    icon: FaReact,
  },
  {
    name: "Responsive Web Design",
    description: "Expertise in creating mobile-first, adaptive layouts.",
    icon: FaMobileAlt,
  },
  {
    name: "Version Control & Git",
    description: "Proficient in using Git for version control.",
    icon: FaGitAlt,
  },
  {
    name: "Debugging",
    description: "Skilled in diagnosing and resolving issues efficiently.",
    icon: FaBug,
  },
  {
    name: "Cross-Browser Compatibility",
    description: "Ensuring flawless function across browsers and devices.",
    icon: FaGlobe,
  },
  {
    name: "Development Tools",
    description: "Proficient in using Visual Studio Code and WebStorm.",
    icon: FaCode,
  },
  {
    name: "Task Runners & Module Bundlers",
    description: "Familiarity with Gulp and Webpack.",
    icon: FaTools,
  },
  {
    name: "Back-End Technologies",
    description: "Basic knowledge of Node.js.",
    icon: FaNodeJs,
  },
  {
    name: "APIs & AJAX",
    description: "Experience with RESTful APIs and AJAX.",
    icon: FaNetworkWired,
  },
  {
    name: "Bootstrap",
    description:
      "Experience with the Bootstrap framework for responsive design.",
    icon: FaBootstrap,
  },
  {
    name: "jQuery",
    description: "Experience with jQuery library for DOM manipulation.",
    icon: FaJsSquare,
  },
];

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <>
      <Header sectionRef={sectionRef} />
      <StarsCanvas />
      <main ref={sectionRef} className="section">
        <div className="container">
          <section className="intro" data-aos="fade-up">
            <header>
              <h1>About Me</h1>
            </header>
            <div className="about-me-icons">
              <FaCode className="about-me-icon" />
              <FaDesktop className="about-me-icon" />
              <FaMobileAlt className="about-me-icon" />
            </div>
            <p>
              As a front-end developer, I am passionate about crafting seamless
              and captivating web experiences. I specialize in using HTML, CSS,
              JavaScript, and React to develop dynamic, responsive applications.
              With a keen eye for design and a commitment to usability, I ensure
              that every project I undertake is both visually appealing and
              highly functional.
            </p>
          </section>
          <section className="content-list">
            {skills.map((skill, index) => (
              <article key={index} className="content-list__item" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <header>
                  <h2 className="title-2">
                    <skill.icon className="skill-icon" /> {skill.name}
                  </h2>
                </header>
                <p>{skill.description}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
