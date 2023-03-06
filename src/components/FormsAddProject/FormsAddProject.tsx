import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, List } from '@mui/material';
import { addProjeto } from '../../store/projectSlicer';

export const FormsAddProject: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [novoProjeto, setNovoProjeto] = useState("");
  const dispatch = useDispatch();

  const OpenHendle = () => {
    setOpen(true);
  };
  
  const CloseHandle = () => {
    setOpen(false);
    setNovoProjeto("");
  };

  const InputProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovoProjeto(event.target.value);
  };

  const AddNewProject = () => {
    if (novoProjeto == "") {
      toast.error("Digite o nome do projeto");
    } else {
      dispatch(addProjeto(novoProjeto));
      setNovoProjeto("");
      toast.success("Projeto criado com sucesso!");
    }
  }

  return (
    <Container maxWidth="md" style={{ padding: "2em" }}>
      <ToastContainer
        autoClose={2500}
        pauseOnHover={false}
      />

      {!open ?
        <Button
          onClick={OpenHendle}
        >
          Criar novo projeto
        </Button>
        :
        <List>
          <input
            placeholder='oi'
            onChange={InputProject}
          />
          <div>
            <button onClick={AddNewProject}>criar</button>
            <button onClick={CloseHandle}>cancelar</button>
          </div>
        </List>
      }
    </Container>
  );
}