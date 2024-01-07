import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";


export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Aplicação desenvolvida por <span>Renan Ferreira</span>
        </p>
      </div>

      <div>
        <p>Acesse minhas redes</p>
        <FaGithub />
        <TfiLinkedin />
      </div>
    </footer>
  );
}
