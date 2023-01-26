import { memo } from "react";

export function HeaderComponent() {
  return (
    <header>To-Do List</header>
  )
}

export const Header = memo(HeaderComponent);