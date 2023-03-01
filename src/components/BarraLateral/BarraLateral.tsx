import "./style.scss";
import React, { useState } from 'react';
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { addProjeto } from "../../store/projectSlicer";
import { ToastContainer, toast } from 'react-toastify';

export const BarraLateral: React.FC = () => {

  const [novoProjeto, setNovoProjeto] = useState("");
  const project = useSelector((state: RootState) => state.project.projetos);
  const dispach = useDispatch();


  const AddNovoProjeto = () => {
    if (novoProjeto == "") {
      toast.error("Digite um nome para o projeto");
      return;
    } else {
      dispach(addProjeto(novoProjeto));
      setNovoProjeto("");
      toast.success("Projeto criado com sucesso!");
    }
  }

  return (
    <div className="menu">
      <nav>
        <ul>
          <h2>Menu</h2>

          {project.map((item, key) => (
            <li key={key}>
              <LabelImportantIcon /> | {item.title}
            </li>
          ))}

          <ToastContainer
            autoClose={2500}
            pauseOnHover={false}
          />
          <div className="btn" >
            <input
              type="text"
              placeholder=" Adicionar projeto"
              value={novoProjeto}
              onChange={(event) => setNovoProjeto(event.target.value)}
            />
            <AddIcon style={{cursor: "pointer", background: "white", padding: "4px"}}
              onClick={AddNovoProjeto}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}