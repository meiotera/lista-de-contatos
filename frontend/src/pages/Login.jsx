import Input from "../components/Input";

export default function Login(props) {
  return (
    <section>
      <form action="">
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
      </form>
    </section>
  );
}
