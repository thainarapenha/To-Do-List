import "./style.scss";
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Button, Container, Modal, TextField } from '@mui/material';

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

  const handleOpen = () => setOpen(true);

  const CloseHandle = () => {
    setOpen(false);
    setTituloTarefa("");
  };

  const InputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTituloTarefa(event.target.value);
  };

  const AddNewTask = () => {
    if (tituloTarefa == "") {
      toast.error("Digite o nome da tarefa");
    } else {
      setTituloTarefa("");
      CloseHandle();
      toast.success("Tarefa criada com sucesso!");
    }
  }

  return (
    <Container className="containerTask">
      <ToastContainer
        autoClose={2500}
        pauseOnHover={false}
      />

      <div className="cabecalho">
        <text>Titulo do projeto</text>
        
        <Button
          id="btnTarefa"
          onClick={handleOpen}
        >
          Criar nova tarefa
        </Button>
      </div>

      <div id='divLinha'></div>
      
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
            // rows={4}
            defaultValue=""
            variant="standard"
          />
          <div className="divTag">
            <TextField
              id="standard-basic"
              label="Criar tag"
              variant="standard"
              fullWidth
            />
            <Button>
              Adicionar tag
            </Button>
          </div>

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