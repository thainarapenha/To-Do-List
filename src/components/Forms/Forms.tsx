import { memo } from "react";
import { Button, Container, TextField } from '@mui/material';
import Paper from "@mui/material/Paper";

export function FormsComponent() {
  return (
    <Container maxWidth="md" style={{padding: "2em"}}>
      <Paper style={{padding: "1em"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth/>
          <Button variant="text" style={{marginLeft: "20px"}}>Adicionar</Button>
        </div>
      </Paper>
    </Container>
  );
}

export const Forms = memo(FormsComponent);