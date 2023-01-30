import DeleteIcon from '@mui/icons-material/Delete';
import { Note } from '../../config/interfaces';
import { Paper, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';

interface TarefaProps {
  tarefa: Note
}
export const ItensTarefa = ({tarefa}: TarefaProps) => {
  return (
    <Paper>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
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
          {/* <ListItemText primary={`Line item`}/> */}
          
        </ListItemButton>
      </ListItem>
    </Paper>
  );
}