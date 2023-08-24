import './App.css';
import Categorias from './pages/cardCategorias';
import Tipos from './pages/cateTipos';
import Footer from './pages/footer';
import Head from './pages/header';
import LogoMarca from './pages/marcas';
import Parceiros from './pages/parceiros';
import Produtos from './pages/produtos';
import ProdRelacionados from './pages/prodRelacionados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Categorias />
        <Tipos />
        <Produtos />
        <Parceiros />
        <ProdRelacionados />
        <Produtos />
        <Parceiros />
        <LogoMarca />
        <Footer />
      </header>
    </div>
  );
}

export default App;
