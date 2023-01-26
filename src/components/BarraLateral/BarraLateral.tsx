import "./style.scss";
import { memo } from "react";
import hojeImg from "../../assets/Icons/today.svg";
import semanaImg from "../../assets/Icons/week.svg";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export function BarraLateralComponent(){
  return(
    <div className="menu">
      <nav>
        <ul>
          <h2>Menu</h2>
          
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

export const BarraLateral = memo(BarraLateralComponent);