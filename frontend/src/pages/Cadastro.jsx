import { useContext, useState } from "react";
import { Context } from "../context/useContext";
import Input from "../components/Input";

export default function Cadastro(props) {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <section className="section_form">
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          text={"Digite seu nome"}
          name={"name"}
          placeholder={"Digite seu nome"}
          handleOnChange={handleChange}
        />
        <Input
          type={"text"}
          text={"Digite seu E-mail"}
          name={"email"}
          placeholder={"Digite seu email"}
          handleOnChange={handleChange}
        />
        <Input
          type={"password"}
          text={"Digite sua Senha"}
          name={"password"}
          placeholder={"Digite sua senha"}
          handleOnChange={handleChange}
        />
        <Input
          type={"confirmPassword"}
          text={"Confirme sua Senha"}
          name={"confirmPassword"}
          placeholder={"Confirme sua senha"}
          handleOnChange={handleChange}
        />

        <input className="btn_input" type="submit" value="Cadastrar" />
      </form>
    </section>
  );
}
