import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.topo}>
      <div>
        <h1>Minha agenda</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/login"}>Entrar</Link>
          </li>
          <li>
            <Link to={"/cadastro"}>Cadastrar</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
