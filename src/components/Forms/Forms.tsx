import { useState } from "react";
import { Button, Container, TextField, Paper } from '@mui/material';
import { ItensTarefa } from "../ItensTarefa/ItensTarefa";
import { Note } from "../../config/interfaces";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Forms: React.FC = ()=> {
  const [textTarefa, setTextTarefa] = useState("");
  const [ listaTarefas, setListaTarefas ] = useState<Note[]>([]);

  const AddTareda = (): void => {
    if(textTarefa == "") {
      toast.error("Digite alguma tarefa");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num)
      const novaTarefa = {id: idRandom(99999999), nomeTarefa: textTarefa }
  
      setListaTarefas([...listaTarefas, novaTarefa]);
    }
  }

  const deleteTarefa = (DeleteTarefaById: number): void => {
    setListaTarefas(listaTarefas.filter((nomeTarefa) => nomeTarefa.id !== DeleteTarefaById));
  }

  return (
    <Container maxWidth="md" style={{ padding: "2em 0" }}>
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
            fullWidth
          />
          <Button
            variant="text"
            onClick={AddTareda}
            style={{ marginLeft: "20px" }}
          >
            Adicionar
          </Button>
        </div>

      </Paper>
        {listaTarefas.map((tarefas, key) => (
          <div>
            <ItensTarefa key={key} tarefa={tarefas} deleteTarefa={deleteTarefa}/>
          </div>
        ))}
    </Container>
  );
}