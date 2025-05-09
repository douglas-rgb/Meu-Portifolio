import React from "react";
import styles from "./Home.module.css";
import homeImg from "../../assets/logo.png";

// React-icons
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"; // Importando o ícone do LinkedIn

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.star}></div>

      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.left_sidebar}></div>
          <h1>
            Eu, <br /> Sou o Douglas
          </h1>
          <p>
            Desenvolvedor web apaixonado por tecnologia e inovação. <br />Transformo
            ideias em experiências digitais modernas e responsivas.
          </p>
          <a href="#projetos" className={styles.button}>
            Ver Projetos
          </a>

          <div className={styles.sociais} aria-label="Redes sociais">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaSquareGithub className={styles.github} />
            </a>
            <a
              href="https://facebook.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookSquare className={styles.facebook} />
            </a>
            <a
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaSquareInstagram className={styles.instagram} />
            </a>
            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.linkedin} />{" "}
              
            </a>
          </div>
        </div>

        <div className={styles.image}>
          <img src={homeImg} alt="Douglas, desenvolvedor web" />
        </div>
      </div>
    </section>
  );
};

export default Home;
