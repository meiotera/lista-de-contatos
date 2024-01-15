import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.rodape}>
      <div>
        <p>
          Aplicação desenvolvida por <span>Renan Ferreira</span>
        </p>
      </div>

      <div className={style.rodape_logos}>
        <p>Acesse minhas redes</p>
        <div>
          <FaGithub />
          <TfiLinkedin />
        </div>
      </div>
    </footer>
  );
}
