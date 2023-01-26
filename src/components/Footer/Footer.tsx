import { memo } from "react";
import "./style.scss"

export function FooterComponent(){
  return(
    <footer>
      <h5>© Todos os direitos reservados</h5>
    </footer>
  );
}

export const Footer = memo(FooterComponent);