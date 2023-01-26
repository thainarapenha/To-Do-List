import "./styles/global.scss";
import { HeaderComponent } from './components/Header/Header';
import { FormsComponent } from "./components/Forms/Forms";
import { FooterComponent } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <HeaderComponent/>
      <FormsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App
