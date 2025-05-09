import React from 'react';
import styles from './Servicos.module.css';

const Servicos = () => {
  return (
    <section id="servicos" className={styles.servicos}>
      <div className={styles.container}>
        <h2>O que eu faço</h2>

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">💻</div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criação de sites modernos e responsivos utilizando tecnologias como
              React, HTML, CSS e JavaScript.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">📱</div>
            <h3>Design Responsivo</h3>
            <p>
              Layouts que se adaptam perfeitamente a qualquer dispositivo, garantindo
              uma excelente experiência ao usuário.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">🔗</div>
            <h3>Integrações com APIs</h3>
            <p>
              Conexão com APIs externas para funcionalidades como formulários, dados dinâmicos
              e muito mais.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Servicos;

