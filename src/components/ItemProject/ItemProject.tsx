import TextField from "@mui/material/TextField/TextField";
import { ItemContainer, DivItem, IconItem,  } from "./ItemProject.styles";

interface ItemProjectProps {
  id: number;
  title: string;
  onClick: () => void;
}

export const ItemProject: React.FC<ItemProjectProps> = ({ id, title, onClick }) => {
  return(
    <ItemContainer >
      <DivItem onClick={onClick}>
        <IconItem/>
        <TextField>{title}</TextField>
      </DivItem>
    </ItemContainer>
  );
}