import React, { useState } from 'react';
import styles from '../Header/Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>DouglasTecch</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#home" className={styles.active}>Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuOpen ? styles.active : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
