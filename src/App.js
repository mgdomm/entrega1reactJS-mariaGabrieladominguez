import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
import Contador from './components/Contador';
import ProductosContainer from './components/Items/ProductosContainer';
import ItemDetailContainer from './components/ItemDos/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <DaisyNavBar></DaisyNavBar>

      <div>
        <h1 className="text-3xl font-bold font-mono">Bienvenidos</h1>
      </div>

      <Contador></Contador>

      <ProductosContainer></ProductosContainer>

      <ItemDetailContainer></ItemDetailContainer>
      
    </div>
  );
}

export default App;
