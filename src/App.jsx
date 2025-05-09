

import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Servicos from './pages/Servicos/Servicos';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Servicos />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App

