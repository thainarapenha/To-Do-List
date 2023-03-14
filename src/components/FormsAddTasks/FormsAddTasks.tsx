import "./style.scss";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Container, Modal, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { ItensTask } from "../ItensTask/ItensTask";
import { addNotas } from "../../store/projectSlicer";
import { RootState } from "../../store";

const style = {
  p: 4,
  width: 400,
  top: '50%',
  left: '50%',
  boxShadow: 24,
  border: '2px solid #000',
  bgcolor: 'background.paper',
  transform: 'translate(-50%, -50%)',
  position: 'absolute' as 'absolute',
};

export const FormsAddTasks: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descTarefa, setDescTarefa] = useState("");
  const [trocando, setTrocando] = useState(false);

  const dispatch = useDispatch();

  const idProject = useSelector((state: RootState) => state.project.activeProject);
  const tasks = useSelector((state: RootState) => state.project.projetos[idProject].notas);

  const project = useSelector((state: RootState) => {
    return state.project.projetos.find(
      project => project.id === state.project.activeProject,
    );
  });

  const OpenHandle = () => {
    setOpen(true);
  }

  const CloseHandle = () => {
    setOpen(false);
    setTituloTarefa("");
  };

  const InputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTituloTarefa(event.target.value);
  };

  const InputDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescTarefa(event.target.value);
  };

  const AddNewTask = () => {
    if (tituloTarefa == "") {
      toast.warn("Digite o nome da tarefa");
    } else {
      const novaTarefa = {
        title: tituloTarefa,
        description: descTarefa,
      };

      dispatch(addNotas({ idProject, notas: novaTarefa }));
      setTituloTarefa("");
      setDescTarefa("");
      CloseHandle();
      toast.success("Tarefa criada com sucesso!");
    }
  }

  return (
    <Container className="containerTask">
      <div className="cabecalho">
        {!trocando ? (
          <Typography style={{fontSize: "20px"}}>{project?.title}</Typography>
        ) : (
          ""
        )}
        <Button id="btnTarefa" onClick={OpenHandle}>
          Criar nova tarefa
        </Button>
      </div>

      <div id='divLinha'></div>

      <div className="ContainerTasks">
        {tasks.map((task, key) => (
          <ItensTask
            key={key}
            id={task.id}
            title={task.title}
            idProject={idProject}
          />
        ))}
      </div>

      <Modal
        open={open}
        onClose={CloseHandle}
      >
        <Box sx={style} className="sectionForms">
          <TextField
            id="standard-basic"
            label="Nome da tarefa"
            variant="standard"
            onChange={InputTask}
          />
          <TextField
            id="standard-multiline-static"
            label="Descrição"
            multiline
            defaultValue=""
            variant="standard"
            onChange={InputDesc}
          />
          {/* <div className="divTag">
            <TextField
              id="standard-basic"
              label="Criar tag"
              variant="standard"
              fullWidth
            />
            <Button>
              Adicionar tag
            </Button>
          </div> */}

          <Button
            id="btnTarefa"
            onClick={AddNewTask}
          >
            Criar tarefa
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}