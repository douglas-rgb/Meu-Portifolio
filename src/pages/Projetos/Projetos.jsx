import React from 'react';
import styles from './Projetos.module.css';
import landingPageImg from '../../assets/landing-page.png';
import landingPageImg2 from '../../assets/landing-page2.png';
import landingPageImg3 from '../../assets/landing-page3.png';

const Projetos = () => {
  const listaProjetos = [
    {
      titulo: 'Portfólio Pessoal',
      descricao: 'Site pessoal com React e design responsivo.',
      imagem: landingPageImg3,
      link: '#'
    },
    {
      titulo: 'Landing Page Institucional',
      descricao: 'Página de vendas feita com HTML, CSS e JavaScript.',
      imagem: landingPageImg2,
      link: 'https://douglas-rgb.github.io/Potifolio/'
    },
    {
      titulo: 'Landing Page de Produto',
      descricao: 'Página de vendas feita com HTML, CSS e JavaScript.',
      imagem: landingPageImg,
      link: '#'
    }
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.container}>
        <h2>Meus Projetos</h2>
        <div className={styles.grid}>
          {listaProjetos.map((projeto, index) => (
            <div className={styles.card} key={index}>
              <img src={projeto.imagem} alt={`Projeto: ${projeto.titulo}`} />
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
