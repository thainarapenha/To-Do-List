import { useState } from "react";
import { Button, Container, TextField, Paper } from '@mui/material';
import { ItensTarefa } from "../ItensTarefa/ItensTarefa";
import { Note } from "../../config/interfaces";

export const Forms: React.FC = () => {
  const [textTarefa, setTextTarefa] = useState("");

  const [ listaTarefas, setListaTarefas ] = useState<Note[]>([]);

  const AddTareda = () => {
    const idRandom = (num: number) => Math.floor(Math.random() * num)
    const novaTarefa = {id: idRandom(99999999), nomeTarefa: textTarefa }

    setListaTarefas([...listaTarefas, novaTarefa]);
  }

  return (
    <Container maxWidth="md" style={{ padding: "2em 0" }}>
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

        {listaTarefas.map((tarefas, key) => (
          <div style={{marginTop: "1em"}}>
            <ItensTarefa key={key} tarefa={tarefas} />
          </div>
        ))}
      </Paper>
    </Container>
  );
}