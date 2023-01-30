import "./style.scss";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import cxEntrada from "../../assets/Icons/inbox.svg";
import hojeImg from "../../assets/Icons/today.svg";
import semanaImg from "../../assets/Icons/week.svg";

export const BarraLateral: React.FC = () => {
  return(
    <div className="menu">
      <nav>
        <ul>
          <h2>Menu</h2>
          
          <li><img src={cxEntrada}/>Caixa de entrada</li>
          <li><img src={hojeImg}/>Hoje</li>
          <li><img src={semanaImg}/>Essa semana</li>
          
          <h2>Projetos</h2>

          <div className="btn" >
            <AddIcon/>
            <Button variant="text" style={{color: "black"}}>Adicionar projeto</Button>
          </div>
        </ul>
      </nav>
    </div>
  );
}