import "./style.scss";
import React from 'react';
import List from "@mui/material/List/List";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { ItemProject } from "../ItemProject/ItemProject";
import { changeProject } from "../../store/projectSlicer";
import { FormsAddProject } from "../FormsAddProject/FormsAddProject";
import imgInbox from "../../assets/Icons/inbox.svg";
import imgToday from "../../assets/Icons/today.svg";
import imgWeek from "../../assets/Icons/week.svg";
import imgArrow from "../../assets/Icons/arrow.svg";

export const BarraLateral: React.FC = () => {
  const [inbox, today, week, ...projects] = useSelector(
    (state: RootState) => state.project.projetos,
  );
  const dispatch = useDispatch();

  const ClickProject = (id: number) => {
    dispatch(changeProject(id));
  };

  return (
    <section className="menu">
      <div className="divMenu">
        <div>
          <img/>
          <text>
            <span>My</span>
            List
          </text>
        </div>
      </div>
      
      <h2>Menu</h2>
      <List className="navMenu">
        <ItemProject
          id={inbox.id}
          key={inbox.id}
          title={inbox.title}
          icon={imgInbox}
          onClick={() => ClickProject(inbox.id)}
        />
        <ItemProject
          id={today.id}
          key={today.id}
          title={today.title}
          icon={imgToday}
          onClick={() => ClickProject(today.id)}
        />
        <ItemProject
          id={week.id}
          key={week.id}
          title={week.title}
          icon={imgWeek}
          onClick={() => ClickProject(week.id)}
        />

        <FormsAddProject />

        {projects.map(project => (
          <ItemProject
            id={project.id}
            key={project.id}
            title={project.title}
            icon={imgArrow}
            onClick={() => ClickProject(project.id)}
          />
        ))}
      </List>
    </section>
  );
}