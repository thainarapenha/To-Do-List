import "./styles/global.scss";
import { HeaderComponent } from './components/Header/Header';
import { FormsComponent } from "./components/Forms/Forms";
import { FooterComponent } from "./components/Footer/Footer";
import { BarraLateralComponent } from "./components/BarraLateral/BarraLateral";

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="containerApp">
        <BarraLateralComponent/>
        <FormsComponent/>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App
