import React, { useRef, useEffect } from "react";
import Header from "./../components/header/Header";
import StarsCanvas from "./../components/canvas/StarsCanvas";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "../helpers/skillsData";
import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600 });
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
            As a Front-End Engineer, I am dedicated to crafting seamless and engaging web experiences. I specialize in leveraging HTML, CSS, JavaScript, TypeScript, and React to build dynamic, responsive applications that are both visually stunning and highly functional. With a strong focus on clean, maintainable code and an eye for modern design principles, I continuously strive to elevate usability and performance in every project. My passion for innovation and commitment to quality drive me to deliver solutions that not only meet but exceed user expectations.
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
