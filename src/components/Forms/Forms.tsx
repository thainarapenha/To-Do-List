import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, TextField } from '@mui/material';

export const Forms: React.FC = () => {
  const [textTarefa, setTextTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const AddTareda = () => {
    if (textTarefa == "") {
      toast.error("Digite alguma tarefa");
    } else {

      setTextTarefa("");
      toast.success("Tarefa criada com sucesso!");
    }
  }

  return (
    <Container maxWidth="md" style={{ padding: "2em" }}>
      <ToastContainer
        autoClose={2500}
        pauseOnHover={false}
      />

      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            value={textTarefa}
            onChange={(event) => setTextTarefa(event.target.value)}
            fullWidth />

          <Button style={{ marginLeft: "20px" }}
            variant="text"
            onClick={AddTareda}
          >
            Adicionar
          </Button>
        </div>

      </Paper>
        {/* {listaTarefas.map((tarefas, key) => (
          <div>
            <ItensTarefa key={key} tarefa={tarefas} deleteTarefa={deleteTarefa}/>
          </div>
        ))} */}
    </Container>
  );
}