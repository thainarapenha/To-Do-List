import "./styles/global.scss";
import { Forms } from "./components/Forms/Forms";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";

function App() {
  return (
    <div className="containerApp">
      <BarraLateral/>
      <Forms/>
    </div>
  );
}

export default App
