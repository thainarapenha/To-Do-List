import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { removerNota } from '../../store/projectSlicer';
import { DivTitle, TaskContainer } from './ItensTask.styles';
import CloseIcon from '@mui/icons-material/Close';

interface TarefaProps {
  idProject: number;
  id: number;
  title: string;
}

export const ItensTask: React.FC<TarefaProps> = ({ idProject, id, title }) => {
  const dispatch = useDispatch();

  const DeleteTask = () => {    
    if (confirm("Tem certeza que quer excluir?")){
      dispatch(removerNota({ idProject, idTask: id }));
      toast.success("Tarefa excluída com sucesso!");
      }
    }

  return (
    <TaskContainer>
      <DivTitle>
        <Typography>{title}</Typography>
        <CloseIcon
          style={{cursor: "pointer"}}
          onClick={DeleteTask}
        />
      </DivTitle>
    </TaskContainer>
  );
}