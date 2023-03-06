import "./styles/global.scss";
import { FormsAddTasks } from "./components/FormsAddTasks/FormsAddTasks";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";

function App() {
  return (
    <div className="containerApp">
      <BarraLateral/>
      <FormsAddTasks/>
    </div>
  );
}

export default App
