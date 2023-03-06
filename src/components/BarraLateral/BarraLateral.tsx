import "./style.scss";
import React from 'react';
import List from "@mui/material/List/List";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { ItemProject } from "../ItemProject/ItemProject";
import { changeProject } from "../../store/projectSlicer";
import { FormsAddProject } from "../FormsAddProject/FormsAddProject";

export const BarraLateral: React.FC = () => {
  const [inbox, today, week, ...projects] = useSelector(
    (state: RootState) => state.project.projetos,
  );
  const dispatch = useDispatch();
  
  const ClickProject = (id: number) => {
    dispatch(changeProject(id));
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <List>
      {projects.map(project => (
          <ItemProject
            id={project.id}
            key={project.id}
            title={project.title}
            onClick={() => ClickProject(project.id)}
          />
        ))}

        <FormsAddProject/>
        
        <ItemProject
          id={inbox.id}
          key={inbox.id}
          title={inbox.title} 
          onClick={() => ClickProject(inbox.id)}
        />
      </List>
    </div>
  );
}