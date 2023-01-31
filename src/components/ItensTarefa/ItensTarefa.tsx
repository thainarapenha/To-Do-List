import DeleteIcon from '@mui/icons-material/Delete';
import { Note } from '../../config/interfaces';
import { Paper, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';

interface TarefaProps {
  tarefa: Note
  deleteTarefa(DeleteTarefa: number): void,
}

export const ItensTarefa = ({tarefa, deleteTarefa}: TarefaProps) => {
  return (
    <Paper>
      <ListItem style={{marginTop: "1em"}}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => deleteTarefa(tarefa.id)}/>
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <span>{tarefa.nomeTarefa}</span>          
        </ListItemButton>
      </ListItem>
    </Paper>
  );
}