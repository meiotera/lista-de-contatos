import Input from "../components/Input";

import { useState, useContext } from "react";

import { Context } from "../context/useContext";

export default function Login(props) {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    login(user);
  }
  return (
    <section className="section_form">
      <form onSubmit={handleSubmit}>
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
        <input className="btn_input" type="submit" value="Entrar" />
      </form>
    </section>
  );
}
