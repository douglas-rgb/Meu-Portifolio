import React, { useState } from 'react';
import styles from '../Contato/Contato.module.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [urlWhatsApp, setUrlWhatsApp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Olá, meu nome é ${nome}.
${mensagem ? `Mensagem: ${mensagem}` : ''}
${email ? `Email: ${email}` : ''}`;

    const url = `https://wa.me/5511912824454?text=${encodeURIComponent(texto)}`;
    setUrlWhatsApp(url);

    // Tenta abrir com window.open
    const novaJanela = window.open(url, '_blank');
    
    // Fallback para o link oculto se o navegador bloquear
    if (!novaJanela || novaJanela.closed || typeof novaJanela.closed === 'undefined') {
      setTimeout(() => {
        const link = document.getElementById('linkWhatsApp');
        if (link) link.click();
      }, 100);
    }
  };

  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <h2>Entre em Contato</h2>

        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label htmlFor="nome" className="sr-only">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="mensagem" className="sr-only">Mensagem</label>
          <textarea
            id="mensagem"
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>

          <button type="submit">Enviar via WhatsApp</button>
        </form>

        {/* Link oculto para fallback */}
        <a
          id="linkWhatsApp"
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'none' }}
        >
          Abrir WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contato;
