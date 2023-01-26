import "./styles.scss";
import { memo } from "react";

export function HeaderComponent() {
  return (
    <header>
      <h1>To-Do List</h1>
    </header>
  )
}

export const Header = memo(HeaderComponent);