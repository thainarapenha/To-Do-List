import "./styles/global.scss";
import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";
import { Forms } from "./components/Forms/Forms";

function App() {
  return (
    <div>
      <Header/>
      <div className="containerApp">
        <BarraLateral/>
        <Forms/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
