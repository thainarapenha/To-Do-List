import { Typography } from "@mui/material";
import { ItemContainer, DivItem, IconItem } from "./ItemProject.styles";

interface ItemProjectProps {
  id: number;
  title: string;
  icon: string,
  onClick: () => void;
}

export const ItemProject: React.FC<ItemProjectProps> = ({ id, title, icon, onClick }) => {
  return(
    <ItemContainer >
      <DivItem onClick={onClick}>
        <IconItem src={icon}/>
        <Typography style={{fontSize: "18px", width: "250px"}}>{title}</Typography>
      </DivItem>
    </ItemContainer>
  );
}