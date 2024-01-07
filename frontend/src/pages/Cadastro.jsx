import Input from "../components/Input";

export default function Cadastro(props) {
  return (
    <section>
      <form action="">
        <Input
          type={"text"}
          text={"Digite seu nome"}
          name={"name"}
          placeholder={"Digite seu nome"}
        />
        <Input
          type={"text"}
          text={"Digite seu E-mail"}
          name={"email"}
          placeholder={"Digite seu email"}
        />
        <Input
          type={"password"}
          text={"Digite sua Senha"}
          name={"password"}
          placeholder={"Digite sua senha"}
        />
        <Input
          type={"confirmPassword"}
          text={"Confirme sua Senha"}
          name={"confirmPassword"}
          placeholder={"Confirme sua senha"}
        />
      </form>
    </section>
  );
}
