import "./styles/global.scss";
import { Header } from './components/Header/Header';
import { Forms } from "./components/Forms/Forms";
import { Footer } from "./components/Footer/Footer";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";

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
