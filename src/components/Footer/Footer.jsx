import React from 'react';
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; 2025 Douglas. Todos os direitos reservados.</p>
          <p>Feito com 💖 por Douglastecch</p>
          <div className={styles.socials}>
            <a href="https://github.com/douglas" target="_blank" rel="noopener noreferrer">
              GitHub
            </a> 
            <a href="https://www.facebook.com/douglas" target="_blank" rel="noopener noreferrer">
               Facebook  
            </a>
            <a href="https://www.instagram.com/douglas" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/douglas" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
