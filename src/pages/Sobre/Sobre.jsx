import React from 'react';
import styles from './Sobre.module.css';
import sobreImg from '../../assets/logo.png';

const Sobre = () => {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor web focado em criar soluções modernas, responsivas e com alta performance. 
            Tenho paixão por transformar ideias em experiências digitais.
          </p>
          <p>
            Trabalho com tecnologias como <strong>React</strong>, <strong>Node.js</strong>, <strong>HTML</strong>, 
            <strong> CSS</strong> e outras ferramentas que me permitem entregar valor em cada projeto.
          </p>
        </div>
        <div className={styles.image}>
          <img src={sobreImg} alt="Foto de Douglas, desenvolvedor web" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;

